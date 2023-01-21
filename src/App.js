//여러 소스들
import "./App.css";
import iu from "./iu.jpg";
import data from "./data";
import axios from "axios";

//컴포넌트
import Detail from "./routes/Detail";
import About from "./routes/about";
import { Tabs } from "./routes/Detail";
import { Basket } from "./routes/Basket";

//리액트 관련
import { Col, Row, Nav, Navbar, Container } from "react-bootstrap";
import { useState } from "react";
import { Route, Routes, Link, useNavigate, Outlet } from "react-router-dom";

let links = [
  "https://codingapple1.github.io/shop/shoes1.jpg",
  "https://codingapple1.github.io/shop/shoes2.jpg",
  "https://codingapple1.github.io/shop/shoes3.jpg",
  "https://codingapple1.github.io/shop/shoes4.jpg",
  "https://codingapple1.github.io/shop/shoes5.jpg",
  "https://codingapple1.github.io/shop/shoes6.jpg",
];

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <ColorSchemesExample />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>
                <div className="main-bg"></div>
                <div className="container">
                  <div className="row">
                    {shoes.map((a, i) => {
                      return <Item shoes={a} key={i} i={i}></Item>;
                    })}
                  </div>
                </div>
                <button
                  onClick={() => {
                    let url = "https://codingapple1.github.io/shop/data2.json";
                    axios
                      .get(url)
                      .then((result) => {
                        let getData = result.data;
                        console.log(getData);
                        let newShoes = [...shoes, ...getData];
                        setShoes(newShoes);
                      })
                      .catch(() => {
                        console.log("실패");
                      });
                  }}
                >
                  load
                </button>
              </div>
            </>
          }
        />
        <Route path="/detail/:i" element={<Detail shoes={shoes} />} />
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
        <Route path="/about" element={<About />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;

function Item(props) {
  let i = props.i;
  let shoes = props.shoes;

  return (
    <Col>
      <img id="card" src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`} />
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
            <Nav.Link href="/detail/0">Detail</Nav.Link>
            <Nav.Link href="/event">Event</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/basket">Basket</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
