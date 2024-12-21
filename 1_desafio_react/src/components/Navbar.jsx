import React from "react";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <h2 className="navbar-brand">Pizzería Mammá Mia</h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto gap-3">
            {/* home */}
            <li className="nav-item">
              <button className="btn btn-outline-light">🍕 Home</button>
            </li>

            {/* token */}

            {token ? (
              <>
                <li className="nav-item">
                  <button className="btn btn-outline-light">🔓 Profile</button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light">🔒 Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button className="btn btn-outline-light">🔐 Login</button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light">🔐 Register</button>
                </li>
              </>
            )}
          </ul>
          {/* total */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="btn btn-outline-primary nav-link">
                🛒 Total: $ {total}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
