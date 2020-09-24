import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    const count = this.state.count;
    this.setState({ count: count + 1 });
  };
  render() {
    return (
      <div className="d-flex flex-column align-items-center">
        <h1 className="display-2" style={{ textAlign: "center", color: "red" }}>
          {this.state.count}
        </h1>
        <button className="btn btn-primary" onClick={this.incrementCount}>
          Click
        </button>
      </div>
    );
  }
}

export default Counter;
