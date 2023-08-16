// src/App.js
import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

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
            <Col lg={8}>
              <h1 className="text-title">Follow Us</h1>
              <ul>
                <li>
                  <a className="footer-link" href="google.com">
                    Terms and Conditions
                  </a>
                </li>
              </ul>
              <Form method="post">
                <InputGroup className="mb-3" size="lg">
                  <Form.Control
                    type="email"
                    placeholder="Email-Address"
                    aria-label="E-mail Address"
                    aria-describedby="basic-addon2"
                  />
                  <button id="button-addon2">SUBMIT</button>
                </InputGroup>
              </Form>
            </Col>
            <Col lg={2}>
              <Row>
                <p>Back to Top</p>
              </Row>
              <Row className="pinned">
                <Image
                  className="safal-logo"
                  src="https://alaf.co.tz//assets/uploads/2019/04/safal-logo.png"
                  alt="SAFAL Group Logo"
                />
              </Row>
            </Col>
          </Row>
          <hr className="footer-hr" />
          <p>© 2023 ALAF | All rights reserved.</p>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
