import React, { useContext } from "react";
import { UserContext } from "../context/UserContext"; 
import { useCart } from "../context/CartContext";

/* se usarán las funciones directamente desde el CartContext */

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removePizza, totalPrice } = useCart();
  const { token } = useContext(UserContext); // token


  return (
    <div className="container mt-3 p-3 border border-black rounded">
      <h2 className="text-center p-3">Detalles del pedido</h2>
      <div className="cart-items">
        {cart.length > 0 ? (
          cart.map((pizza) => (
            <div className="row mb-3" key={pizza.id}>
              <div className="col-12 col-sm-3 text-center">
                <img
                  src={pizza.img}
                  alt={pizza.name}
                  className="img-fluid rounded"
                  style={{ maxWidth: "100px" }}
                />
              </div>
              <div className="col-12 col-sm-4 text-center text-sm-start">
                <h5>{pizza.name}</h5>
                <p>Precio: ${pizza.price}</p>
              </div>
              <div className="col-12 col-sm-5 d-flex flex-wrap justify-content-center align-items-center gap-2 mt-2">
                <button
                  onClick={() => decreaseQuantity(pizza.id)}
                  className="btn btn-danger me-2"
                >
                  -
                </button>
                <span className="mx-2">{pizza.count}</span>
                <button
                  onClick={() => increaseQuantity(pizza.id)}
                  className="btn btn-success ms-2"
                >
                  +
                </button>
                {pizza.count >= 0 && (
                  <button
                    onClick={() => removePizza(pizza.id)}
                    className="btn btn-warning m-2"
                  >
                    Eliminar
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>El carrito está vacío.</p>
        )}
      </div>

      {cart.length > 0 && (
        <div className="total mt-4">
          <h4>Total: ${totalPrice}</h4>
        </div>
      )}

      <div className="text-center mt-4">
        <button className="btn btn-dark" disabled={!token}>{token ? "Pagar" : "Inicia sesión para pagar"}</button>
      </div>
    </div>
  );
};

export default Cart;
