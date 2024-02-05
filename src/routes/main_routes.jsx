import AdminNavigator from "../views/admin";
import Login from "../views/auth/login";
import Register from "../views/auth/register";
import Home from "../views/home";
import admin_routes from "./admin_routes";

//Array de rutas
const main_routes = [
  //Rutas de autenticación
  {
    route: "login",
    component: <Login />,
    children: [],
  },
  {
    route: "register",
    component: <Register />,
    children: [],
  },

  //landings
  {
    route: "home",
    component: <Home />,
    children: [],
  },
  //Inicio de subrutas
  {
    route: "admin",
    component: <AdminNavigator />,
    children: admin_routes,
  },
];

export default main_routes;
