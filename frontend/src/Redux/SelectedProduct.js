import { createSlice } from "@reduxjs/toolkit";

const productState = {
  id: "",
};

const SelectedProduct = createSlice({
  name: "selectedProduct",
  initialState: productState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setId } = SelectedProduct.actions;
export default SelectedProduct.reducer;
