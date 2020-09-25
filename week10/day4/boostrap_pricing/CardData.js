import React from "react";
import CardItem from "./CardItem";

function CardData(props) {
  const listItems = props.data.map((feature) => (
    <CardItem key={feature.id} data={feature.data} status={feature.status} />
  ));
  return (
    <>
      <ul className="fa-ul">{listItems}</ul>
      <a href="#" className="btn btn-block btn-primary text-uppercase">
        Button
      </a>
    </>
  );
}

export default CardData;
