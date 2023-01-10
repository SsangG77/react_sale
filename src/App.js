
import './App.css';


import {Col, Row, Nav, Navbar, Container} from 'react-bootstrap';
import iu from "./iu.jpg"
import { useState } from 'react';
import data from "./data";
import { func } from 'prop-types';


function App() {

  let [shoes, setShoes] = useState(data);


  return (
    <div className="App">
      <ColorSchemesExample/>

      <div className='main-bg'></div>

      <div>
      <Row>
        <Items/>
      </Row>
      </div>

    </div>
  );
}

export default App;

function Items() {
  let result = data.map((value, i) => {
    
    return (
      <Item index={i} shoes={value} Key={i}></Item>
    )
  })
  return result;
}


function Item(props) {

  let i = props.index;
  let shoes = props.shoes;

  return (
    <Col>
      <img src=''/>
      <h4>{shoes.title}</h4>
      <p>{shoes.price}</p>
    </Col>

  )
}


function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

