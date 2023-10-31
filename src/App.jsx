import { ThemeProvider } from "@emotion/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import theme from "../theme";
import NotFound from "./components/404";
import Inicio from "./views";

import routes from "../routes";

const App = () => {
  //Obtener rutas de Routes
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={route.component}
            key={route.route}
          />
        );
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {getRoutes(routes)}
          <Route path={"/"} element={<Inicio />} />
          <Route path={"/404"} element={<NotFound />} />
          <Route path={"*"} element={<Navigate to="/404" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
