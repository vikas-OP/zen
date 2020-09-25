import React from "react";
import Header from "./Header";
import TodoList from "./TodoList";

function App() {
  return (
    <div style={{ minHeight: "100vh" }} className="bg-dark">
      <Header />
      <div className="text-white">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
