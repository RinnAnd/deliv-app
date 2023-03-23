import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dish, cartState } from "../types";


const initialState: cartState = {
    products: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Dish>) => {
            state.products.push(action.payload)
        }
    }
});

export const { addProduct } = cartSlice.actions;
