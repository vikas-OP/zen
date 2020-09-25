import React from "react";
import CardHeader from "./CardHeader";
import CardData from "./CardData";

function PricingCard(props) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <CardHeader plan={props.data.plan} price={props.data.price} />
          <hr />
          <CardData data={props.data.features} />
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
