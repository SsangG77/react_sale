import { useParams } from "react-router-dom";
import styled from "styled-components";

let links = ["https://codingapple1.github.io/shop/shoes1.jpg", "https://codingapple1.github.io/shop/shoes2.jpg", "https://codingapple1.github.io/shop/shoes3.jpg"];

let Btn = styled.button`
  background: ${(props) => props.bg};
  color: black;
  padding: 10px;
`;

let BlackBox = styled.div`
  background: black;
  color: black;
  width: 60px;
  height: 60px;
`;

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
    </div>
  );
}

export default Detail;
