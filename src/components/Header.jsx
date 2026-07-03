import { useContext, useRef } from 'react';

import logoImage from "../assets/logo.jpg";
import CartModal from "./CartModal.jsx";
import Button from './UI/Button.jsx';
import CartContext from '../store/CartContext.jsx';

export default function Header({ onUpdateCartItemQuantity }) {
  const cartCtx = useContext(CartContext);
  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) =>{
    return totalNumberOfItems+item.quantity;
  },0)
 const modal = useRef();

 const cartQuantity = cartCtx.items.length;

 function handleOpenCartClick() {
   modal.current.open();
 }

 let modalActions = <button>Close</button>;

 if (cartQuantity > 0) {
   modalActions = (
     <>
       <Button textOnly>Close</Button>
       <Button>Checkout</Button>
     </>
   );
 }

 return (
  <>
   <CartModal
        ref={modal}
        cartItems={cartCtx.items}
        onUpdateCartItemQuantity={onUpdateCartItemQuantity}
        title="Your Cart"
        actions={modalActions}
      />
   <header id="main-header">
    <div id="title">
     <img
      src={logoImage}
      alt="Elegant model"
     />
     <h1>IFFI Food</h1>
    </div>
    <nav>
      <Button onClick={handleOpenCartClick} textOnly={true}>Cart ({totalCartItems})</Button>
    </nav>
   </header>
  </>
 );
}
