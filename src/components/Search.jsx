import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import "./Search.css";

const Search = () => {
  const [cats, setCats] = useState([]);
  const [catDetails, setCatDetails] = useState([]);

  useEffect(() => {
    async function getCats() {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=20&api_key=live_0gKYZqSJEFQWb3Vd2Z2m3njZFRFpXYA0fomm2xLZJ0ePtYwbGxMi7KLS0oizD3A8"
      );
      const data = await response.json();
      setCats(data);
      let tempCatDetails = [];
      for (let i = 0; i < data.length; i++) {
        tempCatDetails.push({
          name: faker.name.firstName(),
          breed: faker.animal.cat(),
          price: faker.commerce.price(),
        });
      }
      console.log(tempCatDetails);
      setCatDetails(tempCatDetails);
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
              <h3>{catDetails[i].name}</h3>
              <p>{catDetails[i].breed}</p>
              <h4>£{catDetails[i].price}</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis.
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Search;
