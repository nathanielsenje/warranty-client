import React from "react";
import Nav from "react-bootstrap/Nav";

function Tabs() {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Why You Need Warranty</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Register Your Warranty</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">File Warranty Claim</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Tabs;
