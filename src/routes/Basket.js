//컴포넌트

import { useState, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeName, countUp, increase } from "../store.js";

// function Child() {
//   console.log("자식 ");
//   return <>자식임</>;
// }

let Child = memo(function () {
  console.log("재렌더링됨.");
  return <>자식임</>;
});

export function Basket() {
  let state = useSelector((state) => state);

  let dispatch = useDispatch();

  let [count, setCount] = useState(0);

  return (
    <>
      <Child></Child>
      <span>{state.user.name}</span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        setCount
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          dispatch(changeName(state.user));
        }}
      >
        Click
      </button>
      <span>{state.user.age}</span>
      <button
        onClick={() => {
          dispatch(increase());
        }}
      >
        Age Up
      </button>

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">상품명</th>
            <th scope="col">수량</th>
            <th scope="col">변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((item, i) => {
            return (
              <tr key={i}>
                <td>1</td>
                <td>{state.cart[i].name}</td>
                <td>{state.cart[i].count}</td>

                <td>
                  <button
                    onClick={() => {
                      dispatch(countUp(i));
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
