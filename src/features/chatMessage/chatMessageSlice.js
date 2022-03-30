import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: [],
    loading: false
}
const chatMessageSlice = createSlice({
    name: 'chatMessage',
    initialState,
    reducers: {
        getMessage: (state, action) => {
            state.messages = action.payload.messages
        },
        setLoading: (state) => {
            state.loading = true
        },
        deleteMessage: (state, action) => {
            state.messages = state.messages.filter(message => !action.payload.messages.includes(message.messageId))
        },
        addMessage: (state, action) => {
            state.messages = [...state.messages, action.payload.message]
        },
        redactMessage: (state, action) => {
            state.messages = [...state.messages].reduce((acc, message) => {
                if (message.messageId === action.payload.messageId) return [...acc, { ...message, text: action.payload.text, changed: true, }]
                return [...acc, message]
            }, [])
        }
    }
})


const { getMessage, setLoading, deleteMessage, addMessage, redactMessage } = chatMessageSlice.actions

export const getMessageTC = (payload) => dispatch => {
    dispatch(getMessage({ messages: payload }))
    dispatch(setLoading())
}

export const deleteMessageTC = payload => dispatch => {
    dispatch(deleteMessage({ messages: payload }))
}

export const addMessageTC = payload => (dispatch, getState) => {

    const message = {
        userId: 1, messageId: getState().chatMessage.messages.length + 2,
        text: payload.text, changed: false,
        time: new Date().toLocaleTimeString().slice(0, -3),
        check: false,
        firstName: payload.firstName,
        lastName: payload.lastName,
        pintMessage: {
            userId: 2,
            name: {
                firstName: payload.pintFirstName
            },
            messageId: payload.pintMessageId,
            text: payload.pinttext
        }
    }
    dispatch(addMessage({ message: message }))
}


export const redactMessageTC = payload => dispatch => {
    
    dispatch(redactMessage(payload))
}


export default chatMessageSlice.reducer