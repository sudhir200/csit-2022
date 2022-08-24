import React, { useEffect } from "react";
import "./style.css";
import { starIcon } from "../../utils/iconUtils";
function RecipeCard(props) {
  const [data, setData] = React.useState({});
  useEffect(() => {
    fetchDrinks().then((res) => {
      setData(res?.drinks[0]);
    });
  }, []);
  async function fetchDrinks() {
    let rawData = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    return rawData.json();
  }

  return (
    <div
      className={"recipe-card-wrapper"}
      style={{
        height: 150,
        padding: 10,
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),url(${data?.strDrinkThumb})`,
      }}
    >
      <div className={"recipe-card-text"}>
        <span id={"drinkTitle"}>{data.strDrink}</span>
        <span id={"auth"}>{data.strIBA}</span>
      </div>
      <div className={"recipe-card-rating"}>
        {starIcon(15, 15)}
        <span>4.0</span>
      </div>
    </div>
  );
}

export default RecipeCard;
