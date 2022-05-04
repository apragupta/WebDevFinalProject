import { apiSlice } from './api.js'
import activeReducer from "./active-reducer";
import logger from "redux-logger";
import {configureStore} from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        active: activeReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware).concat(logger)
})