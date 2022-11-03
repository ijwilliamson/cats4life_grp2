import "./DropDownList.css";
import { useState, useEffect } from "react";

const DropDownList = (props) => {
  const [catList, updateCatList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.thecatapi.com/v1/breeds");
      const data = await response.json();

      console.log(data);
      updateCatList(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <select id="breeds" onChange={(event) => props.handleOnChange(event)}>
        {catList.map((cat, index) => {
          return (
            <option key={index} value={cat.id}>
              {cat.name}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default DropDownList;
