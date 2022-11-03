import "./DropDownList.css";
import { useState, useEffect } from "react";

const DropDownList = () => {
  const [catList, updateCatList] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.thecatapi.com/v1/breeds");
      const data = await response.json();

      console.log(data);
      updateCatList(data);
    }
    fetchData()

  }, [])


  return (
    <div className="dropDown">
      <ul className="menu">{catList.map((cat, index) => {
        return (
          <li className="menu-item"  key ={index}>
            <h2>{cat.name}</h2>
            
          </li>
        )
      })}
        </ul>
    </div>
  );
}













export default DropDownList;