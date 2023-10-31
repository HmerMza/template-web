import Login from "./src/views/auth/login";
import Register from "./src/views/auth/register";
import Home from "./src/views/home";

//Array de rutas
const routes = [
  //Rutas de autenticación
  {
    route: "login",
    component: <Login />,
  },
  {
    route: "register",
    component: <Register />,
  },

  //landings
  {
    route: "home",
    component: <Home />,
  },
];

export default routes;
