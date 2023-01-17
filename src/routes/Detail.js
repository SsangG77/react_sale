import { useParams } from "react-router-dom";
import { Col, Row, Nav, Navbar, Container } from "react-bootstrap";
import styled from "styled-components";
import { useState } from "react";

let links = [
  "https://codingapple1.github.io/shop/shoes1.jpg",
  "https://codingapple1.github.io/shop/shoes2.jpg",
  "https://codingapple1.github.io/shop/shoes3.jpg",
  "https://codingapple1.github.io/shop/shoes4.jpg",
  "https://codingapple1.github.io/shop/shoes5.jpg",
  "https://codingapple1.github.io/shop/shoes6.jpg",
];

function Detail(props) {
  let { i } = useParams();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={links[i]} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.shoes[i].title}</h4>
          <p>{props.shoes[i].content}</p>
          <p>{props.shoes[i].price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      <Tabs />
    </div>
  );
}

export default Detail;

function Tabs() {
  let [tab, changeTab] = useState(0);

  let change = function (e) {
    let num = Number(e.target.id);
    console.log(num);
    changeTab(num);
  };

  return (
    <>
      <Nav variant="tabs" defaultActiveKey="line0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={change} id="0">
            버튼 1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={change} id="1">
            버튼 2
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={change} id="2">
            버튼 3
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {tab == 0 ? <div>내용1</div> : tab == 1 ? <div>내용2</div> : tab == 2 ? <div>내용3</div> : null}
      <TabContent tab={tab} />
    </>
  );
}

function TabContent(props) {
  let tab = props.tab;
  if (tab == 0) {
    return <div>내용 1</div>;
  }
  if (tab == 1) {
    return <div>내용 2</div>;
  }
  if (tab == 2) {
    return <div>내용 3</div>;
  }
}
