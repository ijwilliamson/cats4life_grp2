import { useState, useEffect, useRef } from "react";
import { faker } from "@faker-js/faker";
import "./Search.css";
import About from "../About/About";

const Search = (props) => {
  const [cats, setCats] = useState([]);
  const [catDetails, setCatDetails] = useState([]);
  const [modal, setModal] = useState(false);
  const [about, setAbout] = useState({});
  const [reload, setReload] = useState(true);
  const [breed, setBreed] = useState("");

  console.log(props.breed);
  if (breed !== props.breed) {
    setBreed(props.breed);
    console.log("setting breed");
  }

  useEffect(() => {
    console.log(breed);
    async function getCats() {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${
          breed === "" ? "" : breed.id
        }&limit=20&mime_types=jpg,png&api_key=live_0gKYZqSJEFQWb3Vd2Z2m3njZFRFpXYA0fomm2xLZJ0ePtYwbGxMi7KLS0oizD3A8`
      );
      const data = await response.json();
      setCats(data);
      let tempCatDetails = [];
      for (let i = 0; i < data.length; i++) {
        tempCatDetails.push({
          name: faker.name.firstName(),
          breed: breed === "" ? faker.animal.cat() : breed.name,
          price: faker.commerce.price(),
        });
      }
      setCatDetails(tempCatDetails);
    }

    getCats();
  }, [reload]);

  useEffect(() => {
    // setBreed(props.breed);
    console.log("breed change effect");
    refresh();
  }, [breed]);

  const toggleModal = (index) => {
    setModal(!modal);

    !modal
      ? setAbout({
          name: catDetails[index].name,
          breed: catDetails[index].breed,
          image: cats[index].url,
          price: catDetails[index].price,
          id: index,
        })
      : setAbout({});
    // setModal(!modal);
  };

  const forwardCallback = (id) => {
    props.callback(cats[id], catDetails[id]);
  };

  ////////////////

  const ref = useRef(null);

  const refresh = () => {
    setReload(!reload);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  ///////////////

  return (
    <div className="main-container" ref={ref}>
      {cats.map((cat, i) => {
        return (
          <div className="cat-card-container" key={i}>
            <div className="cat-card">
              <img className="cat-images" src={cat.url} alt="cat" />
              <div className="cat-description-header">
                <p className="cat-description-name">{catDetails[i].name}</p>
                <p className="cat-description-breed">{catDetails[i].breed}</p>
              </div>
              <p className="cat-description-text">
                Hello, my name is <strong>{catDetails[i].name}</strong>! I am
                looking for my forever home and I promise to never wake you up
                at 4am asking for food.
              </p>
              <p className="cat-moreinfo" onClick={() => toggleModal(i)}>
                More info...
              </p>
              <hr className="line" />
              <div className="cat-description-mid">
                <p className="cat-description-mid-title">
                  Reasons that I'm perfect for you:
                </p>
                <div className="cat-reasons">
                  <p>
                    <i className="fa-solid fa-cat"></i> New buddie
                  </p>
                  <p>
                    <i className="fa-sharp fa-solid fa-bowl-food"></i> Easy to
                    care
                  </p>
                  <p>
                    <i className="fa-solid fa-heart heart"></i> Lovely
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
                  <i className="fa-solid fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
        );
      })}
      {modal && (
        <About
          toggleModal={toggleModal}
          about={about}
          callback={forwardCallback}
        />
      )}

      {cats.length === 20 && (
        <button className="refresh-btn" onClick={refresh}>
          More cats
        </button>
      )}
    </div>
  );
};

export default Search;
