import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import "./Search.css";

const Search = (props) => {
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
              <img className="cat-images" key={i} src={cat.url} alt="cat" />
              <div className="cat-description-header">
                <p className="cat-description-name">{catDetails[i].name}</p>
                <p className="cat-description-breed">{catDetails[i].breed}</p>
              </div>
              <p className="cat-description-text">
                Hello, my name is <strong>{catDetails[i].name}</strong>! I am
                looking for my forever home and I promise to never wake you up
                at 4am asking for food.
              </p>
              <hr className="line" />
              <div className="cat-description-mid">
                <p className="cat-description-mid-title">
                  Reasons that I'm perfect for you:
                </p>
                <div className="cat-reasons">
                  <p>
                    <i class="fa-solid fa-cat"></i> New buddie
                  </p>
                  <p>
                    <i class="fa-sharp fa-solid fa-bowl-food"></i> Easy to care
                  </p>
                  <p>
                    <i class="fa-solid fa-heart heart"></i> Lovely
                  </p>
                </div>
              </div>
              <hr className="line" />
              <div className="cat-description-footer">
                <button
                  className="cat-description-btn"
                  onClick={() => props.callback(cat, catDetails[i])}
                >
                  Adopt me
                </button>
                <div className="cat-fee">
                  <p className="cat-description-fee">Adoption fee</p>
                  <p className="cat-description-fee">£{catDetails[i].price}</p>
                </div>
                <button className="cat-description-like">
                  <i class="fa-solid fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Search;
