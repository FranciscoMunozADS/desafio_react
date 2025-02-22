import { createContext, useState, useContext } from "react";
import { pizzaCart } from "../assets/js/pizzas"; // array inicial

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // se iniciará con el carrito vacio para que se vean solo las que agrega el usuario

  // Agregar pizza al carrito

  const addToCart = (pizza) => {
    setCart((prevCart) => {
      // Si la pizza ya esta en el carrito, aumenta la cantidad
      const pizzaExists = prevCart.find((item) => item.id === pizza.id);
      if (pizzaExists) {
        return prevCart.map((item) =>
          item.id === pizza.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        // Si no esta en el carrito, la agrega
        return [...prevCart, { ...pizza, count: 1 }];
      }
    });
  };

  // Aumentar cantidad
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    );
  };

  // Disminuir cantidad
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((pizza) =>
        pizza.id === id && pizza.count > 0
          ? { ...pizza, count: pizza.count - 1 }
          : pizza
      )
    );
  };

  // Eliminar pizza si la cantidad es 0
  const removePizza = (id) => {
    setCart((prevCart) => prevCart.filter((pizza) => pizza.id !== id));
  };

  // vaciar carrito

  const clearCart = () => {
    setCart([]);
  }

  // Calcular total
  const totalPrice = cart.reduce(
    (acc, pizza) => acc + pizza.price * pizza.count,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removePizza,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar el contexto
export const useCart = () => useContext(CartContext);
