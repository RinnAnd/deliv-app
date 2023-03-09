import thunkMiddleware from 'redux-thunk'
import { configureStore } from "@reduxjs/toolkit/dist/configureStore";

const store = configureStore({
    reducer: {

    },
    devTools: true,
    middleware: [thunkMiddleware]
})

export default store;