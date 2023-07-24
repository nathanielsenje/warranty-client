// src/App.js
import React from "react";
import HeaderElement from "./components/HeaderElement";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import "./App.css";
import FormSwitcher from "./components/FormSwitcher";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="container-fluid">
        <HeaderElement />
        <FormSwitcher />
        <Footer />
      </div>
    </div>
  );
}

export default App;
