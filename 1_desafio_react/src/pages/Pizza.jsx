import { useParams } from "react-router-dom";
import { usePizzas } from "../context/PizzaContext";
import { useCart } from "../context/CartContext";

const Pizza = () => {
  const { id } = useParams();
  const { pizzas } = usePizzas();
  const { addToCart } = useCart();

  // .find para buscar la pizza por id en el contexto
  const pizza = pizzas.find((p) => p.id === id);

  // depuracion
  console.log("ID obtenido de la URL:", id);
  console.log("Pizzas en el contexto:", pizzas);
  console.log("Pizza encontrada:", pizza);

  if (!pizza) {
    return <p className="text-center mt-5">Cargando...</p>;
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
                  <li key={index}>🍕 {ingredient}</li>
                ))}
              </ul>
              <div className="text-center mt-4">
                <button className="btn btn-dark" onClick={() => addToCart(pizza)}>
                  🛒 Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
