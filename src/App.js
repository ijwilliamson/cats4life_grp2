import "./App.css";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <div className="nav1">
        {/* <Search /> */}
        <p>All Products</p>
        <input type="text"></input>
        <ul>
          <a href="#">Account</a>
          <a href="#">Cart</a>
        </ul>
      </div>
    </div>
  );
}

export default App;
