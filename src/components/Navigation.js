import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Navigation() {
  return (
    <>
      {/* This should be Stacks etc. */}
      <Row className=" my-div pt-3">
        <Col lg={1}></Col>
        <Col>
          <p className="pt-2 pb-2">
            <b>Talk to us</b> Please don’t hesitate to call us on{" "}
            <b>+255 800 750 194</b>
          </p>
        </Col>
        <Col md="auto">
          <Button className="pt-2 pb-2 pulse-animation">BUY NOW</Button>
        </Col>
        <Col md="auto">
          <Button className="pt-2 pb-2">WARRANTY</Button>
        </Col>
        <Col md="auto">
          <Button className="pt-2 pb-2">DESIGN MY HOME</Button>
        </Col>
        <Col lg={1}></Col>
      </Row>
    </>
  );
}

export default Navigation;
