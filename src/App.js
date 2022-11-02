import "./App.css";
import Search from "./components/Search";
import Basket from "./components/Basket/Basket";
import { useState } from "react";

function App() {
  // State to store the cats in the basket
  const [basketItems, setBasketItems] = useState();

  const addToBasket = (cat) => {
    //function which is called by the search component to add the
    // cat to the basket.
    // The cat is passed as an object
  };

  return (
    <div>
      <div className="nav1">
        <p>All Products</p>
        <input type="text"></input>
        <ul>
          <a href="#">Account</a>
          <a href="#">Cart</a>
        </ul>
      </div>
      <Search />
    </div>
  );
}

export default App;
