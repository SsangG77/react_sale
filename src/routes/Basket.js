//컴포넌트
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { changeName, countUp } from "../store";

export function Basket() {
  let cart = useSelector((state) => {
    return state.cart;
  });
  let state = useSelector((state) => {
    return state;
  });
  console.log(cart);

  let dispatch = useDispatch();

  return (
    <>
      <span>{state.user}</span>
      <button
        onClick={() => {
          dispatch(changeName(state.user));
        }}
      >
        Click
      </button>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          {cart.map((item, i) => {
            return (
              <tr key={i}>
                <th scope="row" key={i}>
                  {item.id}
                </th>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>@sangjin</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(countUp(cart[i].count));
                      console.log(cart[i].count);
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
