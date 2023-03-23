import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../slices/cartSlice"
import { shopSlice } from "../slices/shopSlice";



export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    [shopSlice.reducerPath]: shopSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(shopSlice.middleware)
  }
});

export const AppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
