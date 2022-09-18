import { configureStore } from "@reduxjs/toolkit";
import SelectedProduct from "./SelectedProduct";
import CartItems from "./CartItems";

const store = configureStore({
  reducer: {
    SelectedProduct,
    CartItems,
  },
});

export default store;
