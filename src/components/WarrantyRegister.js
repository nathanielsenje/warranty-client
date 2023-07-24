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
    purchaseDate: "",
    idNumber: "",
    shopOrHardware: "",
    town: "",
    invoiceNumber: "",
    invoiceDate: "",
    efdReceiptNumber: "",
    mobileNumber: "",
    brandPurchased: "",
    quantityPurchased: 0,
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
        <h2 className="text-title">Register product for Warranty</h2>
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
                controlId="floatingIdNumber"
                label="ID Number"
              >
                <Form.Control
                  type="text"
                  name="idNumber"
                  placeholder="ID Number"
                  value={formData.idNumber}
                  onChange={handleChange}
                />
              </FloatingLabel>
              <FloatingLabel
                className="mb-3"
                controlId="floatingShopName"
                label="Shop Name"
              >
                <Form.Control
                  type="text"
                  name="shopOrHardware"
                  placeholder="Shop Name"
                  value={formData.shopOrHardware}
                  onChange={handleChange}
                />
              </FloatingLabel>
              <FloatingLabel
                className="mb-3"
                controlId="floatingTown"
                label="Town"
              >
                <Form.Control
                  type="text"
                  name="town"
                  placeholder="Town"
                  value={formData.town}
                  onChange={handleChange}
                />
              </FloatingLabel>
              <FloatingLabel
                className="mb-3"
                controlId="floatingInvoiceNumber"
                label="Invoice Number"
              >
                <Form.Control
                  type="text"
                  name="invoiceNumber"
                  placeholder="Invoice Number"
                  value={formData.invoiceNumber}
                  onChange={handleChange}
                />
              </FloatingLabel>
              <FloatingLabel
                className="mb-3"
                controlId="floatingEFDReceiptNumber"
                label="EFD Receipt Number"
              >
                <Form.Control
                  type="text"
                  name="efdReceiptNumber"
                  placeholder="EFD Receipt Number"
                  value={formData.efdReceiptNumber}
                  onChange={handleChange}
                />
              </FloatingLabel>
              <FloatingLabel
                className="mb-3"
                controlId="floatingInvoiceDate"
                label="Invoice Date"
              >
                <Form.Control
                  type="date"
                  name="invoiceDate"
                  placeholder="Invoice Date"
                  value={formData.invoiceDate}
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
              </Form.Select>{" "}
              <br />
              <FloatingLabel
                className="mb-3"
                controlId="floatingQuantityPurchased"
                label="Quantity Purchased"
              >
                <Form.Control
                  type="number"
                  name="quantityPurchased"
                  placeholder="Quantity Purchased"
                  value={formData.quantityPurchased}
                  onChange={handleChange}
                />
              </FloatingLabel>
              <Button variant="primary" type="submit" className="btn btn-lg">
                Register Warranty
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
