import React, { PureComponent } from "react";
import Button from "./Button";
import Display from "./Display";
import Header from "./Header";

class Counter extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0,
      width: window.innerWidth,
    };
  }
  incrementCount = () => {
    this.setState(({ count }) => {
      return { count: count + 1 };
    });
  };
  decrementCount = () => {
    this.setState(({ count }) => {
      return { count: count - 1 };
    });
  };
  resetCount = () => {
    this.setState({ count: 0 });
  };
  render() {
    const buttonClasses = "btn btn-md my-3";
    return (
      <>
        <Header />
        <Display count={this.state.count} />
        <div className="d-flex flex-column align-items-center">
          <Button
            class={`btn-primary ${buttonClasses}`}
            clickFunction={this.incrementCount}
          >
            Increment Count
          </Button>
          <Button
            class={`btn-warning ${buttonClasses}`}
            clickFunction={this.decrementCount}
          >
            Decrement Count
          </Button>
          <Button
            class={`btn-danger ${buttonClasses}`}
            clickFunction={this.resetCount}
          >
            Reset Count
          </Button>
        </div>
      </>
    );
  }
}

export default Counter;
