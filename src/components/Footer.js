// src/App.js
import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";

function Footer() {
  return (
    <>
      <footer className="pt-5 pb-5 footer">
        <Container>
          <Row>
            <Col lg={2}>
              <h1 className="text-title">Menu</h1>
              <p>Products & Solutions</p>
              <p>For Homeowners</p>
              <p>Resource Centre</p>
              <p>For Distributors</p>
              <p>Who we are</p>
              <p>Gallery</p>
              <p>Services</p>
            </Col>
            <Col lg={8}></Col>
            <Col lg={2}></Col>
          </Row>
          <hr className="footer-hr" />
          <p>© 2023 ALAF | All rights reserved.</p>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
