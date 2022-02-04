import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../features/profile/profileSlice";
import appReducer from "./appSlice";
import logger from 'redux-logger'
import chatsListReducer from '../features/chatsList/chatListSlice'

export const store = configureStore({
    reducer: {
        app: appReducer,
        profile: profileReducer,
        chatList: chatsListReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})