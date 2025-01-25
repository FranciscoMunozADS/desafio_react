import React from "react";

const Profile = () => {
  const email = "usuario@correo.com";
  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="card-body">
          <h1 className="card-title mb-4 text-center">Perfil</h1>
          <p className="card-text">
            <strong>Email:</strong> {email}
          </p>
          <div className="d-flex justify-content-center">
            <button
              className="mt-3 btn btn-danger btn-lg"
              onClick={() => alert("Cerrar sesión aún no implementado")}
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
