import React from "react";

function Header(props) {
  return (
    <div>
      {props.text}
      {props.isMale.toString()}
    </div>
  );
}

export default Header;
