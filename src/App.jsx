import Header from "./components/Header";
import Checkout from "./components/Checkout";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {
 return (
  <>
   <UserProgressContextProvider>
    <CartContextProvider>
     <Header />
     <Meals />
     <Checkout />
    </CartContextProvider>
   </UserProgressContextProvider>
  </>
 );
}

export default App;
