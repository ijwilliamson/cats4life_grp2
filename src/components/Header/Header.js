import "./Header.css";
import React from "react";
import CatsIcon from "../../cat.png";
import CartIcon from "../../cart.png";
import DropDownList from "../Dropdown/DropDownList";

const Header = (props) => {

  return (
    <div className="nav1">
      <img className="cat" src={CatsIcon} alt="cat"></img>
      <span>Cats4Lyf</span>
      <DropDownList handleOnChange={props.handleOnChange} />
     

      <img
        className="cartlogo"
        onClick={props.toggle}
        src={CartIcon}
        alt="cart"
      ></img>
    </div>
  );
};

export default Header;
