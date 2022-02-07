import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    resentChats: [],
    loading: false
}
const resentSearchChatSlice = createSlice({
    name: 'resentSearchChat',
    initialState,
    reducers: {
        getChatList: (state, action) => {
            state.resentChats = action.payload.resentChats
        },
        setLoading: (state) => {
            state.loading = true
        },
        clearHistoryChat: (state, action) => {
            state.resentChats = state.resentChats.filter(chat => chat.chatId !== action.payload.chatId)
        },
        clearFullHistory: (state) => {
            state.resentChats = []
        }
    }
})


const { getChatList, setLoading, clearHistoryChat, clearFullHistory } = resentSearchChatSlice.actions

// THUNK 

export const getChatListTC = (payload) => dispatch => {
    dispatch(getChatList({ resentChats: payload }))
    dispatch(setLoading())
}

export const clearHistoryChatTC = payload => dispatch => {
    dispatch(clearHistoryChat(payload))
}

export const clearFullHistoryTC = () => dispatch => {
    dispatch(clearFullHistory())
}

export default resentSearchChatSlice.reducer