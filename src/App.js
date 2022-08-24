import React from "react";
import RecipeCard1 from "./components/cards/recipeCard1";
function App(props) {
  const [element, setElement] = React.useState("water");
  const [loading, setLoading] = React.useState(true);
  const [initNum, setInitNum] = React.useState(0);
  const handleWater = () => {
    setElement("ice");
    setLoading(false);
  };
  const handleIce = () => {
    setElement("vapour");
    setLoading(false);
  };
  const addNum = () => {
    let num = initNum + 1;
    setInitNum(num);
  };
  return (
    <div
      style={{
        maxWidth: 400,
        margin: "auto",
        gap: 10,
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
      }}
    >
      <RecipeCard1 />
      {/* {[0, 12, 3, 4, 4, 4].map((item) => (
        <RecipeCard />
      ))}*/}
    </div>
  );
}

export default App;
