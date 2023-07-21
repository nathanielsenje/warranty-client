// src/App.js
import React from "react";
import WarrantyRegister from "./components/WarrantyRegister";
import HeaderElement from "./components/HeaderElement";

function App() {
  return (
    <div className="App">
      <img
        src="./header-image.png"
        class="img-fluid rounded-top"
        alt="header"
      />
      <div className="container-fluid">
        <HeaderElement />
        <WarrantyRegister />
      </div>
    </div>
  );
}

export default App;
