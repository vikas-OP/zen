import React from "react";
function Display(props) {
  return (
    <h1 className="display-3" style={{ textAlign: "center" }}>
      {props.count}
    </h1>
  );
}

export default Display;
