//컴포넌트

import { useSelector, useDispatch } from "react-redux";

import { changeName, countUp, increase } from "../store.js";

export function Basket() {
  let cart = useSelector((state) => {
    return state.cart;
  });

  let state = useSelector((state) => state);
  console.log(state.cart);

  let dispatch = useDispatch();

  return (
    <>
      <span>{state.user.name}</span>
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
