import React from "react";
import { useState, useEffect } from "react";

const Search = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    async function getCats() {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=10"
      );
      const data = await response.json();
      setCats(data);

      console.log(data[0].url);
    }
    getCats();
  }, []);

  return (
    <div>
      {cats.map((cat, i) => {
        return (
          <div>
            <h2>Cat</h2>
            <img key={i} src={cat.url} alt="cat" />
          </div>
        );
      })}
    </div>
  );
};

export default Search;
