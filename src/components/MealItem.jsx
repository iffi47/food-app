import { currencyFormatter } from "../util/formatting";

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
      <button onClick={() => onAddToCart(id)}>Add to Cart</button>
     </p>
    </article>
   </li>
  );
}
