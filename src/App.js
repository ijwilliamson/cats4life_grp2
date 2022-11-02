import "./App.css";
import Search from "./components/Search";
import Basket from "./components/Basket/Basket";
import { useState } from "react";
import Footer from "./components/Footer";
import CatsIcon from "./cat.png";
import CartIcon from "./cart.png";
import SearchIcon from "./searchlogo.png";

function App() {
  // State to store the cats in the basket

  const [basketItems, setBasketItems] = useState([]);
  const [basketVisible, setBasketVisible] = useState(false);

  const toggleBasket = () => {
    //Toggle the basket
    setBasketVisible(!basketVisible);
  };

  const addToBasket = (cat) => {
    //function which is called by the search component to add the
    // cat to the basket.
    // The cat is passed as an object

    let tempBasket = [...basketItems];
    tempBasket.push(cat);

    setBasketItems(tempBasket);
  };

  return (
    <>
      <div className="nav1">
        <img className="cat" src={CatsIcon} alt="cat"></img>
        <span>Cats4Lyf</span>
        <input type="text"></input>
        <img className="searchlogo" src={SearchIcon} alt="sl"></img>
        <div className="BTN">
          <img src={CartIcon} alt="cart"></img>
          <button className="bas" onClick={toggleBasket}>
            Basket
          </button>
        </div>
      </div>
      <Basket
        visible={basketVisible}
        toggle={toggleBasket}
        basketState={basketItems}
      />

      <Search callback={addToBasket} />

      <Footer />
    </>
  );
}

export default App;
