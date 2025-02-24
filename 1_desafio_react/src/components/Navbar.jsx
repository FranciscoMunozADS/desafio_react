import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

// Sustitucíon de total estatico por totalPrice del CartContext

const Navbar = () => {
  const { totalPrice } = useCart();
  const { token, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Pizzería Mammá Mia
        </Link>
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
          <ul className="navbar-nav me-auto gap-2">
            {/* home */}
            <li className="nav-item">
              <Link to="/" className="btn btn-outline-light">
                🍕 Home
              </Link>
            </li>

            {/* token */}

            {token ? (
              <>
                <li className="nav-item">
                  <Link to="/profile" className="btn btn-outline-light">
                    👤 Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <button onClick={logout} className="btn btn-outline-danger">🚪 Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="btn btn-outline-success">
                    🔑 Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="btn btn-outline-warning">
                    📝 Register
                  </Link>
                </li>
              </>
            )}
          </ul>
          {/* total */}
          <ul className="navbar-nav m-2">
            <li className="nav-item">
              <Link to="/cart" className="btn btn-outline-primary nav-link">
                🛒 Total: $ {totalPrice}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
