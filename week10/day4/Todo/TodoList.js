import React from "react";
import data from "./TodoData.js";
import TodoItem from "./TodoItem";

class TodoList extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      todos: data,
    };
  }
  handleClick() {}
  render() {
    const todoItems = this.state.todos.map((todo) => (
      <TodoItem key={todo.id} data={todo} />
    ));
    return todoItems;
  }
}

export default TodoList;
