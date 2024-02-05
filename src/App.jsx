import { ThemeProvider } from "@emotion/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import theme from "../theme";
import NotFound from "./components/404";
import Inicio from "./views";

import main_routes from "./routes/main_routes";

const App = () => {
  //Obtener rutas de Routes
  const getRoutes = (allRoutes) =>
    allRoutes.map((route, index) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }
      if (route.route && route.children.length > 0) {
        return (
          <Route exact path={route.route} element={route.component} key={index}>
            {getRoutes(route.children)}
          </Route>
        );
      } else {
        return (
          <Route
            exact
            path={route.route}
            element={route.component}
            key={index}
          />
        );
      }
    });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {getRoutes(main_routes)}
          <Route path="" element={<Inicio />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
