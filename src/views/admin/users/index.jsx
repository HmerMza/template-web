import React from "react";
import { useNavigate } from "react-router-dom";

const UsersAdmin = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)}>Atrás</button>
    </div>
  );
};

export default UsersAdmin;
