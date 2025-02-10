import React, { useEffect, useState } from "react";
import CardPizza from "../components/CardPizza";
import Header from "../components/Header";
import { useCart } from "../context/CartContext";
import { usePizzas } from "../context/PizzaContext";

const Home = () => {
  const { pizzas } = usePizzas(); // obtiene pizzas
  const { addToCart } = useCart(); // obtiene funcion addToCart

  return (
    <>
      <Header />
      <section>
        <div className="container mt-5">
          <div className="row">
            {pizzas.map((pizza) => (
              <div className="col-md-4 mb-4 d-flex justify-content-center" key={pizza.id}>
                <CardPizza
                  id={pizza.id} // el id es recibida como prop
                  name={pizza.name}
                  price={pizza.price}
                  ingredients={pizza.ingredients}
                  img={pizza.img}
                  onAddToCart={() => addToCart (pizza)} // paso la funcion como prop a cardpizza
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
