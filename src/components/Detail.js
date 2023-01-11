import data from "../data";
import { useState } from "react";

let links = ["https://codingapple1.github.io/shop/shoes1.jpg", "https://codingapple1.github.io/shop/shoes2.jpg", "https://codingapple1.github.io/shop/shoes3.jpg"];

function Detail(props) {
  let [shoes] = useState(data);
  let link = links[props.i];
  let title = shoes[props.i].title;
  let detail = shoes[props.i].detail;
  return (
    <>
      <img src={link} />
      <h1>{title}</h1>
      <p>{detail}</p>
    </>
  );
}

export default Detail;
