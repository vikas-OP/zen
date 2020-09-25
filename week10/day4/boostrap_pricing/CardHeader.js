import React from "react";

function CardHeader(props) {
  return (
    <>
      <h5 className="card-title text-muted text-uppercase text-center">
        {props.plan}
      </h5>
      <h6 className="card-price text-center">
        {`$${props.price}`}
        <span className="period">/month</span>
      </h6>
    </>
  );
}
export default CardHeader;
