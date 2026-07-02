import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

export default function MealItem({ meal }) {
 const crtCtx = useContext(CartContext);
 function onAddToCart(item) {
  crtCtx.addItem(item);
 }
 return (
  <li className="meal-item">
   <article>
    <img
     src={`http://localhost:3000/${meal.image}`}
     alt={meal?.name}
    />
    <div>
     <h3>{meal?.name}</h3>
     <p className="meal-item-price">${currencyFormatter.format(meal?.price)}</p>
     <p className="meal-item-description">{meal?.description}</p>
    </div>
    <p className="meal-item-actions">
     <Button onClick={() => onAddToCart(meal)}>Add to Cart</Button>
    </p>
   </article>
  </li>
 );
}
