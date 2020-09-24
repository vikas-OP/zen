import React from "react";
function TimerDiv(props) {
  return (
    <>
      <div className="container-fluid bg-primary d-flex align-items-center justify-content-center h-100">
        <h1 className="display-2 text-center">{props.time}</h1>
      </div>
    </>
  );
}

export default TimerDiv;
