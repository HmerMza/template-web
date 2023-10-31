import { useState } from "react";
import { api_back } from "../../api";

const useApi = () => {
  const [loadingApi, setLoading] = useState([]);
  const [loadedApi, setLoadedApi] = useState([]);
  const [errorApi, setErrorApi] = useState(false);

  const loggedApi = Boolean(
    localStorage.getItem("token") && localStorage.getItem("user")
  );

  function setError(error) {
    setErrorApi(error);
  }

  const loadApi = async ({
    endpoint = "",
    token = false,
    type = "GET", // POST PUT DELETE GET
    body = {},
    instance = "", // api-backend
    file = false,
  }) => {
    setErrorApi(false);
    setLoading((value) => [...value, `${type}__${endpoint}`]);
    setLoadedApi((prevState) =>
      prevState.filter((item) => item !== `${type}__${endpoint}`)
    );

    try {
      let headers = {};

      if (token) {
        const token2 = localStorage.getItem("token");
        if (!token2) {
          setError("No estas logueado. Inicia sesión.");
          console.error("Token no encontrado en localStorage");
        }
        headers["Authorization"] = `Bearer: ${token2}`;
        if (file) {
          headers["Content-Type"] = "multipart/form-data";
        }
      }

      const config = {
        method: type,
        url: endpoint, //Dinamico con la instancia creada en ../api
        headers: headers,
      };

      // ver carpeta api

      if (body) {
        if (file) {
          const formData = new FormData();
          Object.entries(body).forEach(([key, value]) => {
            if (typeof value === "object" && value !== null) {
              try {
                value.forEach((value2) => {
                  formData.append(key, value2);
                });
              } catch (e) {
                formData.append(key, value);
              }
            } else {
              formData.append(key, value);
            }
          });
          config.data = formData;
        } else {
          config.data = body;
        }
      }

      let response;

      switch (instance) {
        case "api_back":
          response = await api_back(config);
          break;
        /*case "firebase":
ejemplo del caso
          break; */
        default:
          response = await api_back(config);
          break;
      }

      if (response.data.error) {
        setError(response.data.error);
        throw new Error(response.data.error);
      }
      setLoading((prevState) =>
        prevState.filter((item) => item !== `${type}__${endpoint}`)
      );
      setLoadedApi((value) => [...value, `${type}__${endpoint}`]);
      return response;
    } catch (error) {
      setLoading((prevState) =>
        prevState.filter((item) => item !== `${type}__${endpoint}`)
      );
      if (error.response) {
        if (error.response.data.error) {
          if (
            error.response.data.error === "INVALID_TOKEN" ||
            error.response.data.error === "MISSING_TOKEN"
          ) {
            localStorage.clear();
            window.location.replace("/login");
          }
          setError(error.response.data.error);
          throw new Error(error.response.data.error);
        } else {
          setError(
            "Error interno del servidor, actualiza la página e intente nuevamente."
          );
          throw new Error(
            "Error interno del servidor, actualiza la página e intente nuevamente."
          );
        }
      } else {
        setError(
          "Error de conexión, actualiza la página e intente nuevamente."
        );
        throw new Error(
          "Error de conexión, actualiza la página e intente nuevamente."
        );
      }
    }
  };

  return { loadApi, loadingApi, errorApi, loggedApi, loadedApi };
};

export default useApi;
