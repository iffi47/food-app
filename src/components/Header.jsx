import { useRef } from 'react';

import logoImage from "../assets/logo.jpg";
import CartModal from "./CartModal.jsx";
import Button from './UI/Button.jsx';

export default function Header({ cart, onUpdateCartItemQuantity }) {
 // const modal = useRef();

 // const cartQuantity = cart.items.length;

 function handleOpenCartClick() {
  //  modal.current.open();
 }

 // let modalActions = <button>Close</button>;

 // if (cartQuantity > 0) {
 //   modalActions = (
 //     <>
 //       <button>Close</button>
 //       <button>Checkout</button>
 //     </>
 //   );
 // }

 return (
  <>
   {/* <CartModal
        ref={modal}
        cartItems={cart.items}
        onUpdateCartItemQuantity={onUpdateCartItemQuantity}
        title="Your Cart"
        actions={modalActions}
      /> */}
   <header id="main-header">
    <div id="title">
     <img
      src={logoImage}
      alt="Elegant model"
     />
     <h1>IFFI Food</h1>
    </div>
    <nav>
      <Button onClick={handleOpenCartClick} textOnly={true}>Cart (0)</Button>
    </nav>
   </header>
  </>
 );
}
