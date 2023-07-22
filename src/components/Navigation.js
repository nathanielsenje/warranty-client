import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Navigation() {
  return (
    <Container>
      <Row>
        <Col>1 of 3</Col>
        <Col md="auto">WARRANTY</Col>
        <Col xs lg="2">
          <Button>DESIGN MY HOME</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Navigation;