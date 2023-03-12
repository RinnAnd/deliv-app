import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { shopSlice } from "./redux/slices/shopSlice";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={shopSlice}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);
