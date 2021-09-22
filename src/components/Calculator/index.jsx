import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default () => (
  <>
    Bill
    <InputGroup className="mb-3">
      <FormControl
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
      />
    </InputGroup>

    Select Tip %
    <Container className="tip">
      <Row>
        <Col className="tipPercentage">5%</Col>
        <Col className="tipPercentage">10%</Col>
        <Col className="tipPercentage">15%</Col>
        <Col className="tipPercentage">25%</Col>
        <Col className="tipPercentage">50%</Col>
        <Col className="tipPercentage">Custom</Col>
      </Row>
    </Container>

    Number of People
    <InputGroup className="mb-3">
      <FormControl
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
      />
    </InputGroup>
  </>
);
