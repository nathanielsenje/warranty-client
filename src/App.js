// src/App.js
import React from "react";
import WarrantyRegister from "./components/WarrantyRegister";
import HeaderElement from "./components/HeaderElement";
import Image from "react-bootstrap/Image";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Image
        src="https://alaf.co.tz/assets/img/headers/header-image.jpg"
        className="header-image"
        fluid
      />

      <div className="container-fluid">
        <HeaderElement />
        {/* <Tabs /> */}
        <WarrantyRegister />
        <Footer />
      </div>
    </div>
  );
}

export default App;
