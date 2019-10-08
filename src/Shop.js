import React, { useState, useEffect } from "react";
import "./App.css";
import {Link} from 'react-router-dom';

function Shop() {
  const APP_ID = "145c442f";
  const APP_KEY = "fa595d2525ce712a15ee6856ae21d94c";

  // States
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch(
      `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const items = await data.json();
    const item = items.hits;
    setRecipes(item);
    console.log(item);
  };

  return (
    <div>
      {recipes.map(recipe => (
        <h1 key={recipe.recipe.label}>
           <Link to={`/shop/${recipe.recipe.label}`}>{recipe.recipe.label}</Link> 
        </h1>
      ))}
    </div>
  );
}

export default Shop;
