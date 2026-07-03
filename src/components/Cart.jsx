import { useContext } from "react";
import CartContext from "../store/CartContext";
import Button from "./UI/Button";

export default function Cart({ item, onUpdateItemQuantity }) {
 const { removeItem, addItem } = useContext(CartContext);
 const price = Number(item?.price ?? 0);
 const formattedPrice = `$${price.toFixed(2)}`;


 return (
  <>
   <li key={item.id}>
    <div>
     <span>{item.name}</span>
     <span> ({formattedPrice})</span>
    </div>
    <div className="cart-item-actions">
     <Button textOnly onClick={() => removeItem(item)}>-</Button>
     <span>{item.quantity}</span>
     <Button textOnly onClick={() => addItem(item)}>+</Button>
    </div>
   </li>
  </>
 );
}
