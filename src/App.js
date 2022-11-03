import "./App.css";
import { useEffect, useState } from "react";
import Search from "./components/Search/Search";
import Basket from "./components/Basket/Basket";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";


function App() {

  // Local Storage key

  const _LocalStorageKey = 'cats4life.basket'




  // State to store the cats in the basket

  const [basketItems, setBasketItems] = useState([]);
  const [basketVisible, setBasketVisible] = useState(false);
  const [breed, setBreed] = useState("");


  // Local storage use Effect

  useEffect(() => {
    const localStorageBasket = JSON.parse(localStorage.getItem(_LocalStorageKey))

    if(basketItems){
        if (localStorageBasket){
          setBasketItems(localStorageBasket)
        }
    }
  }, [])

  useEffect(() => {
    if (basketItems.length>0){
      localStorage.setItem(_LocalStorageKey, JSON.stringify(basketItems))
    }
  }, [basketItems])



  const handleOnChange = (event) => {
    // event handler for the breed selection on the nav dropdown
    const newBreed = {
      id: event.currentTarget.value,
      name: event.currentTarget[event.currentTarget.selectedIndex].text,
    };
    setBreed(newBreed);

    console.log(event.currentTarget[event.currentTarget.selectedIndex].text);
  };

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
        setBasketState={setBasketItems}
      />
      <div>
        <Header toggle={toggleBasket} handleOnChange={handleOnChange} basketItems={basketItems} />
        <Hero />
        <Search callback={addToBasket} breed={breed} />

        <Footer />
      </div>
    </>
  );
}

export default App;
