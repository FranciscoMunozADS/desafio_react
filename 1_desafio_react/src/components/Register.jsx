import { useState } from "react";

const Register = () => {
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  /* Función genérica para onChange */

  const updateSignupData = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  /* Botón (submit) */

  const handleSubmit = (e) => {
    e.preventDefault(); // de esta manera no se actualiza la página (default de submit)

    // Validaciones dentro del botón

    if (
      !signupData.email ||
      !signupData.password ||
      !signupData.confirmPassword
    ) {
      alert("Completa todos los campos.");
      return;
    }
    if (signupData.password.length < 6) {
      alert("La constraseña debe tener al menos 6 caracteres.");
      return;
    }
    if (signupData.password !== signupData.confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    alert("Datos enviados correctamente.");
    console.log("Datos enviados correctamente:", signupData);
    setSignupData({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <>
      <form
        className="m-5 border border-dark p-4 shadow-lg rounded bg-light"
        onSubmit={handleSubmit}
      >
        <h3 className="text-center text-primary mb-4">Registrate</h3>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Dirección de Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            autoComplete="username"
            value={signupData.email}
            onChange={updateSignupData}
          />
          <div id="emailHelp" className="form-text">
            No compartiremos tu email con nadie.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            autoComplete="new-password"
            value={signupData.password}
            onChange={updateSignupData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirmar contraseña
          </label>
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            id="confirmPassword"
            autoComplete="confirm-password"
            value={signupData.confirmPassword}
            onChange={updateSignupData}
          />
        </div>
        <div className="mb-3 form-check"></div>
        <button type="submit" className="btn btn-primary btn-lg w-25">
          Crear cuenta
        </button>
      </form>
    </>
  );
};

export default Register;
