import React from "react";
import "./counter.css";

function NumberCounter(props) {
  const [number, setNumber] = React.useState(0);
  const addNum = () => {
    let num = number + 1;
    setNumber(num);
  };
  const subNum = () => {
    let num = number - 1;
    setNumber(num);
  };
  return (
    <div
      className={"counter-wrap"}
      style={{ display: "flex", gap: 10, marginTop: 10 }}
    >
      <button onClick={subNum}>-</button>
      <span>{number}</span>
      <button onClick={addNum}>+</button>
    </div>
  );
}

export default NumberCounter;
