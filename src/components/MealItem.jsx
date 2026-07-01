export default function MealItem({
  id,
  image,
  title,
  price,
  description,
  onAddToCart,
}) {
  return (
    <article className="meal-item">
      <img src={image} alt={title} />
      <div>
        <div>
          <h3>{title}</h3>
          <p className='meal-item-price'>${price}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className='meal-item-actions'>
          <button onClick={() => onAddToCart(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
