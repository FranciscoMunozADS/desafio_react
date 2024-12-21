import React from "react";

const Login = () => {
  return (
    <>
      <form className="my-5 border border-dark p-4">
        <h3 className="mb-4">Ingresa</h3>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Dirección de Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            autoComplete="username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            autoComplete="off"
          />
        </div>

        <div className="mb-3 form-check"></div>
        <button type="submit" className="btn btn-primary">
          Ingresar
        </button>
      </form>
    </>
  );
};

export default Login;
