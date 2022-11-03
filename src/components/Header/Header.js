import "./Header.css";
import React from "react";
import CatsIcon from "../../cat.png";
import CartIcon from "../../cart.png";
// import SearchIcon from "../../searchlogo.png";
import DropDownList from "../Dropdown/DropDownList";

const Header = (props) => {
  // const handleOnChange = (event) => {
  //   console.log(event.currentTarget.value);
 
  // }

  return (
    <div className="nav1">
      <img className="cat" src={CatsIcon} alt="cat"></img>
      <span>Cats4Lyf</span>
      <DropDownList handleOnChange={props.handleOnChange} />
      {/* <input type="Submit">pick me</input> */}
     
      {/* <img className="searchlogo" src={SearchIcon} alt="sl"></img> */}

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
