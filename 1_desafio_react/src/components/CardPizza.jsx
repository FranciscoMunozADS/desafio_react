import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const CardPizza = ({ img, name, ingredients, price, onAddToCart, id }) => {
  return (
    <>
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Pizza {name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted text-center">
            Ingredientes
          </Card.Subtitle>
          <div> {/* reemplazo de cardtext por div por error en la consola de estructura html */}
            {/* 🍕{ingredients.join(", ")} */}
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>🍕 {ingredient}</li>
              ))}
            </ul>
          </div>
          <Card.Title className="text-center">Precio ${price}</Card.Title>
          <div className="d-flex justify-content-between gap-2 mt-3">
            <Link to={`/pizza/${id}`} className="btn btn-outline-dark">
            ver más 👀
            </Link>
            <Button variant="dark" onClick={onAddToCart}> 🛒 Añadir</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardPizza;

// intento con boostrap react (casi me mori)
