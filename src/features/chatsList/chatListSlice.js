import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    chats: [
    ],
    loader: false
}

const chatsListSlice = createSlice({
    name: 'chatsList',
    initialState,
    reducers: {
        getChatLIst: (state, action) => {
            state.chats = action.payload.chats
        },
        setLoader: (state, action) => {
            state.loader = action.payload.loader
        },
        deleteChat: (state, action) => {
            state.chats = state.chats.filter((chat) => chat.chatId !== action.payload.chatId)
        }
    }

})


const { getChatLIst, setLoader, deleteChat } = chatsListSlice.actions

export const getChatLIstTC = (payload) => dispatch => {
    dispatch(getChatLIst({ chats: payload }))
    dispatch(setLoader({ loader: true }))

}
export const deleteChatTC = (payload) => dispatch => {
    debugger
    dispatch(deleteChat(payload))
}

export default chatsListSlice.reducer