import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dish, cartState } from "../types";

const initialState: cartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Dish>) => {
      const { dish_id } = action.payload;
      const inCart = state.products.findIndex(
        (product) => product.dish_id === dish_id
      );
      if (inCart !== -1) {
        state.products[inCart].quant! += 1;
      } else {
        state.products.push(action.payload);
      }
    },
  },
});

export const { addProduct } = cartSlice.actions;
