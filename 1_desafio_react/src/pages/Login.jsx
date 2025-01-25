import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [signinData, setSigninData] = useState({
    email: "",
    password: "",
  });

  /* Función para onChange */
  const updateSigninData = (e) => {
    const { name, value } = e.target;
    setSigninData({
      ...signinData,
      [name]: value,
    });
  };

  /* botón (submit) */

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validaciones dentro del botón

    if (!signinData.email || !signinData.password) {
      alert("Completa todos los campos.");
      return;
    }
    if (signinData.password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    alert("Datos correctos.");
    console.log("Datos correctos:", signinData);
    setSigninData({
      email: "",
      password: "",
    });
  };
  return (
    <>
      <form
        className="m-5 border border-dark p-4 shadow-lg rounded bg-light"
        onSubmit={handleSubmit}
      >
        <h3 className="text-center text-primary mb-4">Iniciar sesión</h3>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail2" className="form-label">
            Dirección de Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
            autoComplete="username"
            value={signinData.email}
            onChange={updateSigninData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword2"
            autoComplete="off"
            value={signinData.password}
            onChange={updateSigninData}
          />
        </div>
        <div className="mb-3 form-check"></div>
        <button type="submit" className="btn btn-primary btn-lg w-25">
          Ingresar
        </button>
        <p className="mt-5">No tienes una cuenta?</p>
        <Link to="/register">Regístrate</Link>
      </form>
    </>
  );
};

export default Login;
