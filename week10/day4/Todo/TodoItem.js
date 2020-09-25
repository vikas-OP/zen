import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: this.props.data.completed,
    };
  }
  handleClick = () => {
    this.setState(({ completed }) => {
      return {
        completed: !completed,
      };
    });
  };
  render() {
    let style;
    this.state.completed
      ? (style = {
          textDecoration: "line-through",
          color: "black",
        })
      : (style = null);
    return (
      <div className="d-flex align-items-center my-2 justify-content-center">
        <input
          type="checkbox"
          checked={this.state.completed}
          onChange={this.handleClick}
          className="mx-3"
        />
        <h6 style={style} className="align-self-end">
          {this.props.data.task}
        </h6>
      </div>
    );
  }
}

export default TodoItem;
