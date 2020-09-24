import React from "react";

function Button(props) {
  return (
    <button className={props.class} onClick={props.clickFunction}>
      {props.children}
    </button>
  );
}

export default Button;
