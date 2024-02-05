import { Outlet } from "react-router-dom";

const AdminNavigator = () => {
  return (
    <div>
      <h1>Admin works!</h1>
      <Outlet />
    </div>
  );
};

export default AdminNavigator;
