/* este contextó será para la reusabilidad del fetch a la api */

import { createContext, useState, useEffect, useContext } from "react";

// Crear el contexto
const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

  /* consultar api */

  const getPizzas = async () => {
    try {
      // url del endpoint
      const url = "http://localhost:5000/api/pizzas";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setPizzas(data);
    } catch (error) {
      console.error("Error fetching pizzas:", error);
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas }}>
      {children}
    </PizzaContext.Provider>
  );
};

// Hook para usar el contexto
export const usePizzas = () => useContext(PizzaContext);