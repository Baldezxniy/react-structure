import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../features/profile/profileSlice";
import appReducer from "./appSlice";
import logger from 'redux-logger'


export const store = configureStore({
    reducer: {
        app: appReducer,
        profile: profileReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})