import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productcarts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart(state, action) {
      state.productcarts.push(action.payload);
    },

    removeCart(state, action) {
      state.productcarts = state.productcarts.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;