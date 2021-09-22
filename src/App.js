import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Calculator from './components/Calculator/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title1">
          S p l i
        </div>
        <div className="title2">
          t t e r
        </div>
        <div>
          <Container fluid className="mainContainer">
            <Row>
              <Col>
                <Calculator />
              </Col>
              <Col>
                Tip Amounta
                / person

                Total
                / person

                Reset
              </Col>
            </Row>
          </Container>
        </div>
        <div className="attribution">
          Challenge by Frontend Mentor.
          Coded by Kerilet.
        </div>
      </header>
    </div>
  );
}

export default App;
