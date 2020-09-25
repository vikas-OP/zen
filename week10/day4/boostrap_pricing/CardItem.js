import React from "react";

function CardItem(props) {
  const classes = props.status ? "fa-check" : "fa-times";
  const liClass = props.status ? null : "text-muted";
  return (
    <>
      <li className={liClass}>
        <span className="fa-li">
          <i className={`fas ${classes}`}></i>
        </span>
        {props.data}
      </li>
    </>
  );
}

export default CardItem;
