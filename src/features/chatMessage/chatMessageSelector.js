export const getMessage = (state) =>{
    return state.chatMessage.messages
}

export const getLoading = state =>{
    return state.chatMessage.loading
}