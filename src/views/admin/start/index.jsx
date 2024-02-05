import React from "react";
import { useNavigate } from "react-router-dom";

const StartAdmin = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("users")}>Usuarios</button>
    </div>
  );
};

export default StartAdmin;
