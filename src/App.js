import "./App.css";
import Search from "./components/Search";
import CatsIcon from './cat.png'
import CartIcon from './cart.png'
import SearchIcon from "./searchlogo.png";
import React, { useState } from "react";

function App() {
  let [getState, setState] = useState({ displayCats: [] });
  let [getDisplayBasket, setDisplayBasket] = useState({ displayBasket: 0 });

  //click handle
  const addBasket = (e) => {
    const value = e.target.value;
    
    setState({ displayCats: [...getState.displayCats, e.target.title]});
  };

  const displayBasket = (e) => {
    if (getDisplayBasket.displayBasket == 0) {
      setDisplayBasket({ displayBasket:1 });
    } else {
      setDisplayBasket({ displayBasket:0 });
    }
    
  };
  return (
    <div>
      
      <div className="nav1">
        <img className="cat" src={CatsIcon} alt="cat"></img>
        <span>Cats4Lyf</span>
        <input type="text"></input>
        <img className="searchlogo" src={SearchIcon} alt="sl"></img>
        <div className="BTN">
          
          <img src={CartIcon} alt="cart" onClick={addBasket} title="lorna"></img>
          <button className="bas" onClick={displayBasket}>Basket</button>
          </div>
          
        </div>
        
      {JSON.stringify(getState.displayCats)}
    <Search addBasket={addBasket} showBasket={getDisplayBasket.displayBasket} />
    </div>
     
  );
}

export default App;
