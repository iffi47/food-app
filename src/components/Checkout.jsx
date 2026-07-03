import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import UserProgressContext from "../store/UserProgressContext";
import Button from "./UI/Button";
import Input from "./UI/Input";
import useHttp from "../hooks/useHttp";
import Error from "./UI/Error";

const requestConfig = {
 method: "POST",
 headers: {
  "Content-Type": "application/json",
 },
};

export default function Checkout() {
 const cartCtx = useContext(CartContext);
 const userProgressCtx = useContext(UserProgressContext);
 const cartTotal = cartCtx.items.reduce(
  (totalPrice, item) => totalPrice + item.quantity * item.price,
  0,
 );
 const { data, isLoading, error, sendRequest, clearData } = useHttp(
  "http://localhost:3000/orders",
  requestConfig,
 );
 function handleClose() {
  userProgressCtx.hideCheckout();
 }
 function handleHideCheckout() {
  userProgressCtx.hideCheckout();
  cartCtx.clearCart();
  if (typeof clearData === "function") {
   clearData();
  }
 }
 async function checkoutAction(fd) {
  const data = Object.fromEntries(fd.entries());
  await sendRequest(
   JSON.stringify({
    order: {
     items: cartCtx.items,
     customer: data,
    },
   }),
  );
 }
 let actions = (
  <>
   <Button
    type="button"
    onClick={handleClose}
    textOnly>
    Close
   </Button>
   <Button>Submit Order</Button>
  </>
 );
 if (isLoading) {
  actions = <span>Sending data ......</span>;
 }
 if (data && !error) {
  return (
   <Modal
    open={userProgressCtx.progress === "checkout"}
    onClose={handleClose}>
    <h2>Success!</h2>
    <p>Your orders Submitted successfully</p>
    <p>We will get back to you soon!</p>
    <p className="modal-actions">
     <Button onClick={handleHideCheckout}>Exit!</Button>
    </p>
   </Modal>
  );
 }

 return (
  <>
   <Modal
    open={userProgressCtx.progress === "checkout"}
    onClose={handleClose}>
    <form action={checkoutAction}>
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
     {error && (
      <Error
       title="Failed to submit orders"
       message={error}
      />
     )}
     <p className="modal-actions">{actions}</p>
    </form>
   </Modal>
  </>
 );
}
