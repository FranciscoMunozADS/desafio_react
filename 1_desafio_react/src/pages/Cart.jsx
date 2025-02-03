import { useCart } from "../context/CartContext";

/* se usarán las funciones directamente desde el CartContext */

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removePizza, totalPrice } = useCart();



  return (
    <div className="container mt-3 p-2 border border-black">
      <h2 className="text-start p-3">Detalles del pedido</h2>
      <div className="cart-items">
        {cart.length > 0 ? (
          cart.map((pizza) => (
            <div className="row mb-3" key={pizza.id}>
              <div className="col-3">
                <img
                  src={pizza.img}
                  alt={pizza.name}
                  className="img-fluid rounded"
                  style={{ maxWidth: "100px" }}
                />
              </div>
              <div className="col-5">
                <h5>{pizza.name}</h5>
                <p>Precio: ${pizza.price}</p>
              </div>
              <div className="col-4 d-flex align-items-center">
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
                    className="btn btn-warning ms-2"
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
        <button className="btn btn-dark">Pagar</button>
      </div>
    </div>
  );
};

export default Cart;
