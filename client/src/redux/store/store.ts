import thunkMiddleware from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { shopSlice } from "../slices/shopSlice";

const store = configureStore({
  reducer: {
    [shopSlice.reducerPath]: shopSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(shopSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
