import {  createContext, useReducer } from "react";

//REDUCER Function
function cartReducer(state, action) {
 const existingCartItemIndex = state.items.findIndex(
  (item) => item.id === action.item.id,
 );
 const updatedItems = [...state.items];
 const existingItem = state.items[existingCartItemIndex];
 if (action.type === "ADD_ITEM") {
  if (existingCartItemIndex > -1) {
   const updatedItem = {
    ...existingItem,
    quantity: existingItem.quantity + 1,
   };
   updatedItems[existingCartItemIndex] = updatedItem;
  } else {
   updatedItems.push({ ...action.item, quantity: 1 });
  }
  return { ...state, items: updatedItems };
 }
 if (action.type === "REMOVE_ITEM") {
  if (existingItem.quantity === 1) {
   updatedItems.splice(existingCartItemIndex, 1);
  } else {
   const updatedItem = {
    ...existingItem,
    quantity: existingItem.quantity--,
   };
   updatedItems[existingCartItemIndex] = updatedItem;
  }
  return { ...state, items: updatedItems };
 }
 return state;
}

//Context Creation
const CartContext = createContext({
 items: [],
 addItem: (item) => {},
 removeItem: (id) => {},
});

//Context Provider Function
export function CartContextProvider({ children }) {
 const [cart, dispatchCartAction]=useReducer(cartReducer, { items: [] });

 function addItem(item){
  dispatchCartAction({type:"ADD_ITEM", item})
 }
 function removeItem(item){
  dispatchCartAction({type: "REMOVE_ITEM", item})
 }
 const cartContext= {
  items: cart.items,
  addItem,
  removeItem
 }

 return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
}

export default CartContext;
