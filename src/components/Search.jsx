import React from "react";
import { useState, useEffect } from "react";
import "./Search.css";

const Search = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    async function getCats() {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=20&api_key=live_0gKYZqSJEFQWb3Vd2Z2m3njZFRFpXYA0fomm2xLZJ0ePtYwbGxMi7KLS0oizD3A8"
      );
      const data = await response.json();
      setCats(data);

      console.log(data[0].url);
    }
    getCats();
  }, []);

  return (
    <div className="main-container">
      {cats.map((cat, i) => {
        return (
          <div className="cat-card-container">
            <div className="cat-card">
              <img className="cat-images" key={i} src={cat.url} alt="cat" />
              <h3>Faker name</h3>
              <h4>Faker price</h4>
              <p>
                Small description: Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Maxime mollitia, molestiae quas vel sint
                commodi repudiandae consequuntur.
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Search;
