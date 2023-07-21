// src/WarrantyRegister.js
import React, { useState } from "react";
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
    <div className="container">
      <h1>Warranty Registration</h1>
      <form onSubmit={handleSubmit} method="post">
        <div className="row">
          <div className="mb-3">
            <input
              type="text"
              name="customerName"
              placeholder="Customer Name"
              value={formData.customerName}
              onChange={handleChange}
            />
            <div className="mb-3">
              <input
                type="date"
                name="purchaseDate"
                placeholder="Purchase Date"
                value={formData.purchaseDate}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="idNumber"
                placeholder="ID Number"
                value={formData.idNumber}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="shopOrHardware"
                placeholder="Shop Name"
                value={formData.shopOrHardware}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="town"
                placeholder="Town"
                value={formData.town}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="invoiceNumber"
                placeholder="Invoice Number"
                value={formData.invoiceNumber}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="date"
                name="invoiceDate"
                placeholder="Invoice Date"
                value={formData.invoiceDate}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="brandPurchased"
                placeholder="Brand Purchased"
                value={formData.brandPurchased}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <input
                type="number"
                name="quantityPurchased"
                placeholder="Quantity Purchased"
                value={formData.quantityPurchased}
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Register Warranty
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default WarrantyRegister;
