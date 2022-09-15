import { createSlice } from "@reduxjs/toolkit";

const CartItems = createSlice({
  name: "cartItem",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state = [...state, state.push(action.payload)];
    },
    removeToCart: (state, action) => {
      state.filter((data) => data.id !== action.payload);
    },
    incCount: (state, action) => {
      state
        .filter((data) => data.id === action.payload.id)
        .forEach((data) => (data.count += 1));
    },
    decCount: (state, action) => {
      state
        .filter((data) => data.id === action.payload.id)
        .forEach((data) => (data.count -= 1));
    },
    totalPrice: (state, action) => {
      state
        .filter((data) => data.id === action.payload.id)
        .forEach((data) => {
          let totalPrice = data.price * data.count;
          return (data.price = totalPrice);
        });
    },
    removeablePrice: (state, action) => {
      state
        .filter((data) => data.id === action.payload.id)
        .forEach((data) => {
          let price = data.price / data.count;
          return (data.price = price);
        });
    },
  },
});
export const {
  addToCart,
  removeToCart,
  incCount,
  decCount,
  totalPrice,
  removeablePrice,
  deleteProduct,
} = CartItems.actions;
export default CartItems.reducer;
