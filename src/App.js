//여러 소스들
import "./App.css";
import iu from "./iu.jpg";
import data from "./data";

//컴포넌트
import Detail from "./routes/Detail";

//리액트 관련
import { Col, Row, Nav, Navbar, Container } from "react-bootstrap";
import { useState } from "react";
import { Route, Routes, Link, useNavigate, Outlet } from "react-router-dom";

let links = ["https://codingapple1.github.io/shop/shoes1.jpg", "https://codingapple1.github.io/shop/shoes2.jpg", "https://codingapple1.github.io/shop/shoes3.jpg"];

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <ColorSchemesExample />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail shoes={shoes} />} />
        <Route
          path="/event"
          element={
            <div>
              <h3>오늘의 이벤트</h3>
              <Outlet></Outlet>
            </div>
          }
        >
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

function Main() {
  return (
    <div>
      <div className="main-bg"></div>
      <div>
        <Row>
          <Items />
        </Row>
      </div>
    </div>
  );
}

function Items() {
  let result = data.map((value, i) => {
    return <Item shoes={value} Key={i}></Item>;
  });
  return result;
}

function Item(props) {
  let i = props.Key;
  let shoes = props.shoes;

  return (
    <Col>
      <img id="card" src={links[i]} />
      <h4>{shoes.title}</h4>
      <p>{shoes.price}</p>
    </Col>
  );
}

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Detail</Nav.Link>
            <Nav.Link href="/event">Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
