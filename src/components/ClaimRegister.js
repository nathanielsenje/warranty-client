// src/WarrantyRegister.js
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import axios from "axios";

function WarrantyRegister() {
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    phoneNumber: "",
    warrantyCode: "",
    productBought: "",
    claim: "",
  });

  // API Endpoints
  const apiUrl = `http://localhost:1337/api/warranty/register`;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(apiUrl, formData)
      .then((response) => {
        console.log(response.data);
        // Add any success message or redirection here
      })
      .catch((error) => {
        console.error(error);
        // Handle the error here
      });
  };

  return (
    <Container>
      <Container className="text-center pb-5 mb-3">
        <h2 className="text-title">
          Send notification to ALAF for after sales service (claims)
        </h2>
        <Row>
          <Col></Col>
          <Col lg={8}>
            <Form onSubmit={handleSubmit} method="post">
              <FloatingLabel
                className="mb-3"
                controlId="floatingCustomerName"
                label="Customer Name"
              >
                <Form.Control
                  type="text"
                  name="customerName"
                  placeholder="Customer Name"
                  value={formData.customerName}
                  onChange={handleChange}
                />
              </FloatingLabel>
              <FloatingLabel
                className="mb-3"
                controlId="floatingEmail"
                label="E-mail"
              >
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FloatingLabel>

              <FloatingLabel
                className="mb-3"
                controlId="floatingMobileNumber"
                label="Mobile Number"
              >
                <Form.Control
                  type="text"
                  name="mobileNumber"
                  placeholder="Mobile Number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
              </FloatingLabel>

              <FloatingLabel
                className="mb-3"
                controlId="floatingWarrantyCode"
                label="Warranty Code"
              >
                <Form.Control
                  type="text"
                  name="warrantyCode"
                  placeholder="Warranty Code"
                  value={formData.warrantyCode}
                  onChange={handleChange}
                />
              </FloatingLabel>

              <Form.Select aria-label="Products Bought">
                <option>Products Bought</option>
                <option value="lifestile">Lifestile</option>
                <option value="romantile">Romantile</option>
                <option value="versatile">Versatile</option> 19,500/- 28G
                <option value="tekdek">Tekdek</option>
                <option value="maxcover">Maxcover</option>
                <option value="covermax">Covermax</option>
                <option value="resincot">Resincot</option>
                <option value="simbadumu">Simba Dumu</option>
              </Form.Select>
              

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <br />
                <Form.Control as="textarea" rows={5} />
              </Form.Group>

              <Button variant="primary" type="submit" className="btn btn-lg">
                File Warranty Claim
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Container>
  );
}

export default WarrantyRegister;
