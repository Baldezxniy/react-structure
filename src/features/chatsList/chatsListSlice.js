import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    chats: [
        { userId: null, firstName: null, lastName: null, message: null, messageTime: null, checkedMessage: null, img: null, online: null }
    ]
}

const chatsListSlice = createSlice({
    name: 'chatsList',
    initialState,
    reducers: {
        getChatLIst: (state, paylout) => {
            state.chats = [...state.chats, ...paylout.chats]
        },
        deleteChat: (state, paylout) => {
            state.chats = state.chats.filter((chat) => {
                chat.id !== paylout.id
            })
        }
    }

})


export const { getChatLIst, deleteChat } = chatsListSlice.actions


export default chatsListSlice.reducer
