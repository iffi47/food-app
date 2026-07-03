import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import UserProgressContext from "../store/UserProgressContext";
import Button from "./UI/Button";
import Input from "./UI/Input";

export default function Checkout() {
 const cartCtx = useContext(CartContext);
 const userProgressCtx = useContext(UserProgressContext);
 const cartTotal = cartCtx.items.reduce(
  (totalPrice, item) => totalPrice + item.quantity * item.price,
  0,
 );
 function handleClose(){
  userProgressCtx.hideCheckout();
 }
 function handleSubmit(event) {
  event.preventDefault();
  const fd = new FormData(event.target);
  const data = Object.fromEntries(fd.entries());
  fetch("http://localhost:3000/orders", {
   method: "POST",
   headers: {
    "Content-Type": "application/json",
   },
    body: JSON.stringify({
     order: {
      items: cartCtx.items,
      customer: data,
     },
    }),
  });
 }
 return (
  <>
   <Modal
    open={userProgressCtx.progress === "checkout"}
    onClose={handleClose}>
    <form onSubmit={handleSubmit}>
     <h2>Checkout</h2>
     <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
     <Input
      label="Full Name"
      type="text"
      required
      id="name"
     />
     <Input
      label="Enter Email"
      type="email"
      id="email"
      required
     />
     <Input
      label="Enter Address"
      type="text"
      id="street"
      required
     />
     <div className="control-row">
      <Input
       label="Postal Code"
       type="text"
       id="postal-code"
       required
      />
      <Input
       label="Enter City"
       type="text"
       id="city"
       required
      />
     </div>
     <p className="modal-actions">
      <Button
       type="button"
       onClick={handleClose}
       textOnly>
       Close
      </Button>
      <Button>Submit Order</Button>
     </p>
    </form>
   </Modal>
  </>
 );
}
