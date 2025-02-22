import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="card-body">
          <h1 className="card-title mb-4 text-center">Perfil</h1>
          <p className="card-text">
            <strong>Email:</strong> {user ? user.email : "No disponible"}
          </p>
          <div className="d-flex justify-content-center">
            <button className="mt-3 btn btn-danger btn-lg" onClick={logout}>
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
