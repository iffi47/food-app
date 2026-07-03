import { useContext, useRef } from 'react';

import logoImage from "../assets/logo.jpg";
import CartModal from "./CartModal.jsx";
import Button from './UI/Button.jsx';
import CartContext from '../store/CartContext.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';

export default function Header({ onUpdateCartItemQuantity }) {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) =>{
    return totalNumberOfItems+item.quantity;
  },0)
 const modal = useRef();

 const cartQuantity = cartCtx.items.length;

 function handleOpenCartClick() {
   modal.current.open();
  }
  function handleCloseCartModal(){
    console.log("In checkouit");
    
   modal.current.open();
  // modal.current.close();
 }

 let modalActions = <Button>Close</Button>;

 if (cartQuantity > 0) {
   modalActions = (
     <>
       <Button textOnly>Close</Button>
       <Button onClick={handleCloseCartModal}>Checkout</Button>
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
