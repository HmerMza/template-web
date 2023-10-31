import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Inicio = () => {
  const navigate = useNavigate();
  //Aqui el context de validacion de roles

  //Redirecciona por defecto a el login
  useEffect(() => {
    navigate("/home");
  }, []);

  return <></>;
};

export default Inicio;
