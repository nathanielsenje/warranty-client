// src/WarrantyRegister.js
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HeaderElement() {
  return (
    <Container>
      <Row>
        <Col>
          <div class="d-flex">
            <div className="justify-content-center mt-5 mb-5 grey-area">
              <h1 className="text-title mt-5 mb-5">ALAF Warranty</h1>
              <p className="text-body">
                ALAF manufactures the highest quality products ensuring the best
                performance and durability. We warrant that, our products are
                manufactured in strict conformity with the East Africa standard
                specifications. The Product Warranty covers fading, perforation,
                and peeling by weathering due to climatic conditions.
              </p>
              <p className="text-body">
                ALAF’s premium stone-coated roofing tiles, Lifestile™ , are made
                to world-class standards. We use the finest quality
                ceramic-coated stone chips that resist fading and ultra-violet
                penetration, sealed onto quality aluminum zinc alloy-coated
                steel that will remain beautiful for generations. The Product
                Warranty covers manufacturing defects and surface coating finish
                deterioration.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HeaderElement;
