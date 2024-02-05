import StartAdmin from "../views/admin/start";
import UsersAdmin from "../views/admin/users";
//Array de rutas
const admin_routes = [
  { route: "", component: <StartAdmin />, children: [] },
  { route: "users", component: <UsersAdmin />, children: [] },
];

export default admin_routes;
