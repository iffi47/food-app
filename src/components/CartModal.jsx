import { forwardRef, useImperativeHandle, useState, useContext } from "react";
import Cart from "./Cart";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";

const CartModal = forwardRef(function CartModalComponent(
 { title, actions },
 ref,
) {
 const cartCtx = useContext(CartContext);
 const [isOpen, setIsOpen] = useState(false);
 const items = cartCtx?.items ?? [];

 useImperativeHandle(ref, () => ({
  open: () => setIsOpen(true),
  close: () => setIsOpen(false),
 }));

 const totalPrice = items.reduce(
  (acc, item) => acc + item.price * item.quantity,
  0,
 );

 return (
  <Modal
   className="cart"
   open={isOpen}
   onClose={() => setIsOpen(false)}>
   <h2>{title}</h2>
   {items.length === 0 && <p>No items in cart!</p>}
   {items.length > 0 && (
    <ul id="cart-items">
     {items.map((item) => (
      <Cart
       key={item.id}
       item={item}
       totalPrice={totalPrice}
      />
     ))}
    </ul>
   )}
   <form
    method="dialog"
    id="modal-actions">
    {actions}
   </form>
  </Modal>
 );
});

export default CartModal;
