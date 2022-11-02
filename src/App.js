import "./App.css";
import Search from "./components/Search";
import Basket from "./components/Basket/basket";


function App() {
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
