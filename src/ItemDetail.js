import React, { useState, useEffect } from "react";
import "./App.css";

function Item() {
  const APP_ID = "145c442f";
  const APP_KEY = "fa595d2525ce712a15ee6856ae21d94c";

  // States
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // fetchItems();
  }, []);

  // const fetchItem = async () => {

  // };

  return (
    <div>
      <h1>Item</h1>
    </div>
  );
}

export default Item;
