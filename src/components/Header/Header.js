import "./Header.css";
import DropDownList from "../Dropdown/DropDownList";

const Header = (props) => {
  return (
    <div className="nav1 navbar-bg">
      <p className="logo">
        <i class="fa-solid fa-cat"></i> Cats<strong>4Life</strong>
      </p>
      <div className="navbar-left">
        <div className="search-container basket-link">
          Search <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <DropDownList handleOnChange={props.handleOnChange} />
        <div className="basket-container">
          <div
            className="cartlogo basket-link"
            onClick={props.toggle}
            alt="cart"
          >
            <i class="fa-solid fa-basket-shopping"></i>Basket
          </div>
          <div className="basket-number">
            {props.basketItems.length > 0 && (
              <div className="basketCount" onClick={props.toggle}>
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
