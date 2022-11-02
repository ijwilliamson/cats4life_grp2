import "./App.css";
import Search from "./components/Search";
import Basket from "./components/Basket/Basket";
import { useState } from "react";
import Footer from "./components/Footer";


function App() {

  // State to store the cats in the basket

  const [basketItems, setBasketItems] = useState([]);
  const [basketVisible, setBasketVisible] = useState(false);

  const toggleBasket=()=> {
    //Toggle the basket
    setBasketVisible(!basketVisible)
  }


  const addToBasket = (cat) =>{
    //function which is called by the search component to add the
    // cat to the basket.
    // The cat is passed as an object

    let tempBasket = [...basketItems];
    tempBasket.push(cat)

    setBasketItems(tempBasket)

  }


  return (
    <>
      <Basket visible={basketVisible} toggle={toggleBasket} basketState={basketItems}/>
      <div>
        <div className="nav1">
          <p>All Products</p>
          <input type="text"></input>
          <ul>
            <a href="#">Account</a>
            <a onClick={toggleBasket}>Cart</a>
          </ul>
        </div>
        <Search callback={addToBasket}/>
        <Footer />
      </div>
    </>
  );
}

export default App;
