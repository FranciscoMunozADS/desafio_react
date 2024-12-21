import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  return (
    <>
      <form className="my-5 border border-dark p-4">
        <h3 className="mb-4">Registrate</h3>
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
            className="form-control"
            id="exampleInputPassword1"
            autoComplete="new-password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirmar contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            autoComplete="confirm-password"
          />
        </div>
        <div className="mb-3 form-check"></div>
        <button type="submit" className="btn btn-primary">
          Registrar
        </button>
      </form>
    </>
  );
};

export default Register;
