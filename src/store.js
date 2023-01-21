import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: "sangjin",
  reducers: {
    changeName(state) {
      return "sangjin cha";
    },
  },
});

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and black", count: 2 },
    { id: 1, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    countUp(state) {
      return state + 1;
    },
  },
});
//둥록
export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});

export let { changeName } = user.actions;
export let { countUp } = cart.actions;
