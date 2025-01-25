import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="display-4 text-danger">Error 404</h1>
        <p className="lead">La página que buscas no existe.</p>
        <div className="mt-4">
          <Link to="/" className="btn btn-primary">
            Volver a la página principal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
