import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WarrantyRegister from "./WarrantyRegister";
import ClaimRegister from "./ClaimRegister";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const FormSwitcher = () => {
  const [activeTab, setActiveTab] = useState("form1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container className="container mt-5">
      <ul className="nav nav-tabs justify-content-center">
        <li className="nav-item">
          <button
            className={`${activeTab === "form1" ? "active" : ""}`}
            onClick={() => handleTabClick("form1")}
          >
            Why you need warranty?
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`${activeTab === "form2" ? "active" : ""}`}
            onClick={() => handleTabClick("form2")}
          >
            Register Warranty
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`${activeTab === "form3" ? "active" : ""}`}
            onClick={() => handleTabClick("form3")}
          >
            File Warranty Claim
          </button>
        </li>
      </ul>
      <div className="tab-content mt-3">
        <div
          className={`tab-pane fade ${
            activeTab === "form1" ? "show active" : ""
          }`}
        >
          <Container>
            <Row className="pb-5 spaced-text">
              <Col lg={7}>
                <h2 className="text-title">
                  Below are reasons why you need the warranty
                </h2>
                <ol>
                  <li>Peace of mind because at ALAF, we keep our word.</li>
                  <li>
                    Guaranteed quality building solutions that are durable.
                  </li>
                  <li>Assurance of remedy in case of product failure.</li>
                  <li>
                    Countrywide activation where you can pick your card from our
                    centers and dealers.
                  </li>
                  <li>Easily accessible support via a toll free number.</li>
                </ol>
              </Col>
              <Col>
                <Image
                  src="https://mabati.com/wp-content/uploads/2022/12/warranty_image.jpg"
                  fluid
                />
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === "form2" ? "show active" : ""
          }`}
        >
          <WarrantyRegister />
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === "form3" ? "show active" : ""
          }`}
        >
          <ClaimRegister />
        </div>
      </div>
    </Container>
  );
};

export default FormSwitcher;

// Site key:
