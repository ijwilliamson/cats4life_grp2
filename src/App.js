import "./App.css";
import Search from "./components/Search/Search";
import Basket from "./components/Basket/Basket";
import { useState } from "react";

import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";

function App() {
  // State to store the cats in the basket

  const [basketItems, setBasketItems] = useState([]);
  const [basketVisible, setBasketVisible] = useState(false);

  const toggleBasket = () => {
    //Toggle the basket
    setBasketVisible(!basketVisible);
  };

  const addToBasket = (cat, catDetails) => {
    //function which is called by the search component to add the
    // cat to the basket.
    // The cat is passed as an object

    let tempBasket = [...basketItems];

    const newCat = {
      url: cat.url,
      id: cat.id,
      name: catDetails.name,
      breed: catDetails.breed,
      price: catDetails.price,
    };

    tempBasket.push(newCat);

    setBasketItems(tempBasket);
    console.log(basketItems);
  };

  return (
    <>
      <Basket
        visible={basketVisible}
        toggle={toggleBasket}
        basketState={basketItems}
      />
      <div>
        <Header toggle={toggleBasket} />
        <Hero />
        <Search callback={addToBasket} />
        <Footer />
      </div>
    </>
  );
}

export default App;
