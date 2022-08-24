import React from "react";
import "./recipeCard.css";

function RecipeCard1(props) {
  let data = {
    strDrink: "Thai Iced Tea",
    author: "By Chef John",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/trvwpu1441245568.jpg",
  };
  return (
    <div
      className={"recipe-card-1"}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),url(${data.strDrinkThumb})`,
      }}
    ></div>
  );
}

export default RecipeCard1;
