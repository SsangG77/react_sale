//리액트
import { useParams } from "react-router-dom";
import { Col, Row, Nav, Navbar, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addItem } from "../store.js";

//라이브러리
import styled from "styled-components";

//css
import "../App.css";

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
  let num = Number(i);
  console.log(num);

  useEffect(() => {
    let watched = localStorage.getItem("watched");
    let watched_arr = JSON.parse(watched);
    if (!watched_arr.includes(num)) {
      watched_arr.push(num);
      localStorage.setItem("watched", JSON.stringify(watched_arr));
    }
  });

  console.log(localStorage.getItem("watched"));

  let [fade, setFade] = useState("");
  let dispatch = useDispatch();
  let state = useSelector((state) => state);

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    };
  }, []);

  return (
    <div className={"container start " + fade}>
      <div className="row">
        <div className="col-md-6">
          <img src={links[num]} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.shoes[num].title}</h4>
          <p>{props.shoes[num].content}</p>
          <p>{props.shoes[num].price}원</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(addItem({ id: 3, name: "test", count: 3 }));
            }}
          >
            주문하기
          </button>
        </div>
      </div>
      <Tabs shoes={props.shoes} />
    </div>
  );
}

export default Detail;

function Tabs(props) {
  let [tab, changeTab] = useState(0);
  let shoes = props.shoes;

  let change = function (e) {
    let num = Number(e.target.id);

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
      <TabContent tab={tab} shoes={shoes} />
    </>
  );
}

function TabContent(props) {
  let tab = props.tab;
  let [fade, setFade] = useState("");

  // useEffect(() => {
  //   //className의 값을 바꾸는 코드
  //   console.log("a");
  //   setTimeout(() => {
  //     setFade("end");
  //   }, 100);
  //   return () => {
  //     console.log("b");
  //     setFade("");
  //   };
  // }, [tab]);

  return <div className={"start " + fade}>{[<div>내용 1</div>, <div>내용 2</div>, <div>내용 3</div>][tab]}</div>;
}
