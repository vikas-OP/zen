import React from "react";
import TimerDiv from "./TimerDiv";
import TimeUpDiv from "./TimeUpDiv";

class Timer extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      count: 10,
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  startTimer = () => {
    this.setState({
      count: 10,
    });
    this.setTimer();
  };

  setTimer = () => {
    this.timerID = setInterval(() => {
      this.setState((prevState) => {
        return {
          count: prevState.count - 1,
        };
      });
    }, 1000);
  };

  render() {
    if (this.state.count === 0) {
      clearInterval(this.timerID);
    }
    return this.state.count > 0 ? (
      <TimerDiv time={this.state.count} />
    ) : (
      <TimeUpDiv clickFunction={this.startTimer} />
    );
  }
}

export default Timer;
