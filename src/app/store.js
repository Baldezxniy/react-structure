import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../features/profile/profileSlice";
import appReducer from "./appSlice";
import logger from 'redux-logger'
import chatsListReducer from '../features/chatsList/chatListSlice'
import resentSearchChatReducer from '../features/resentSearchChat/resentSearchChatSlice'
import recentSearchUserReducer from '../features/recentSearchUser/recentSearchUserSlice'
import searchListReducer from '../features/searchContent/searchListSlice'
import chatHeaderReducer from "../features/chatHeaderContent/chatHeaderSlice";
import chatMessageReducer from "../features/chatMessage/chatMessageSlice";


export const store = configureStore({
    reducer: {
        app: appReducer,
        profile: profileReducer,
        chatList: chatsListReducer,
        searchResentUserList: recentSearchUserReducer,
        searchResentChatList: resentSearchChatReducer,
        searchList: searchListReducer,
        chatHeader: chatHeaderReducer,
        chatMessage: chatMessageReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})