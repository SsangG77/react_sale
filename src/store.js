import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "sangjin", age: 20 },
  reducers: {
    changeName(state) {
      state.name = "park";
      state.age = state.age + 1;
      return state;
    },
    increase(state) {
      state.age = state.age + 1;
      return state;
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
    countUp(state, i) {
      console.log(i.payload);
      state[i.payload].count += 1;
      return state;
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
export let { increase } = cart.actions;
