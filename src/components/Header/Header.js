import "./Header.css";
import DropDownList from "../Dropdown/DropDownList";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="nav1 navbar-bg">
      <p className="logo">
        <Link to="/">
          <i className="fa-solid fa-cat"></i> Cats<strong>4Life</strong>
        </Link>
      </p>
      <div className="navbar-left">
        <div className="search-container basket-link">
          Search <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <DropDownList handleOnChange={props.handleOnChange} />
        <div className="basket-container">
          <div
            className="cartlogo basket-link"
            onClick={props.toggle}
            alt="cart"
          >
            <i className="fa-solid fa-basket-shopping"></i>Basket
          </div>
          <div className="basket-empty">
            {props.basketItems.length > 0 && (
              <div className="basket-number" onClick={props.toggle}>
                {props.basketItems.length}
              </div>
            )}
            {props.basketItems.length === 0 && (
              <div className="basketCountSpace"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
