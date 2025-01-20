import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const URL = "http://localhost:5000/api/pizzas/p001";

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data)
        setPizza(data);
      } catch (error) {
        console.error("Error fetching pizza:", error);
      }
    };
    fetchPizza();
  }, []);

  if (!pizza) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            {pizza.img && (
              <img
                src={pizza.img}
                alt={`Imagen de pizza ${pizza.name}`}
                className="card-img-top"
              />
            )}
            <div className="card-body">
              <h1 className="card-title text-center">{pizza.name}</h1>
              <p className="card-text">{pizza.desc}</p>
              <h3 className="text-center">
                Precio: ${pizza.price.toLocaleString("es-CL")}
              </h3>
              <h5 className="text-center">Ingredientes:</h5>
              <ul className="list-unstyled">
                {pizza.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    🍕 {ingredient}
                  </li>
                ))}
              </ul>
              <div className="text-center mt-4">
                <button className="btn btn-dark">Añadir al carrito</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
