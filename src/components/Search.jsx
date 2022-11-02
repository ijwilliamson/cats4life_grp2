import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import "./Search.css";

const Search = () => {
  const [cats, setCats] = useState([]);
  const [catDetails, setCatDetails] = useState([]);

  useEffect(() => {
    async function getCats() {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=20&mime_types=jpg,png&api_key=live_0gKYZqSJEFQWb3Vd2Z2m3njZFRFpXYA0fomm2xLZJ0ePtYwbGxMi7KLS0oizD3A8"
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
              <p className="cat-description-name">{catDetails[i].name}</p>
              <img className="cat-images" key={i} src={cat.url} alt="cat" />
              <p className="cat-description-breed">{catDetails[i].breed}</p>
              <p className="cat-description-text">
                Hello, my name is <strong>{catDetails[i].name}</strong>! I am
                looking for my forever home and I promise to never wake you up
                at 4am asking for food.
              </p>
              <p className="cat-description-fee">
                Adoption fee: £{catDetails[i].price}
              </p>
              <button className="cat-description-btn">Adopt me</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Search;
