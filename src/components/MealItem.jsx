import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";

export default function MealItem({
  id,
  image,
  title,
  price,
  description,
  onAddToCart,
}) {
  return (
   <li className="meal-item">
    <article>
     <img
      src={`http://localhost:3000/${image}`}
      alt={title}
     />
     <div>
      <h3>{title}</h3>
      <p className="meal-item-price">${currencyFormatter.format(price)}</p>
      <p className="meal-item-description">{description}</p>
     </div>
     <p className="meal-item-actions">
      <Button onClick={() => onAddToCart(id)}>Add to Cart</Button>
     </p>
    </article>
   </li>
  );
}
