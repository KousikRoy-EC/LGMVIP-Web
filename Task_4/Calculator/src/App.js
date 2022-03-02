import React from "react";
import Calculator from "./Calculator";

function App() {
  return (

    <div>
      <div style={{
        display: "flex", justifyContent: "center", alignItems: "center", height: "50px", fontSize: "2em",
        fontWeight: "500"
      }}> Calculator</div>
      <Calculator />
    </div>
  );
}

export default App;
