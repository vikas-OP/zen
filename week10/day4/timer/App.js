import React from "react";
import Header from "./Header";
import Timer from "./Timer";
function App() {
  return (
    <div>
      <Header />
      <div style={{ height: "79vh" }}>
        <Timer />
      </div>
    </div>
  );
}

export default App;
