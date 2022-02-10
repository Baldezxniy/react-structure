import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user: {
    },
    loading: false
}
const chatHeaderSlice = createSlice({
    name: 'chatHeader',
    initialState,
    reducers: {
        getUser: (state, action) => {
            state.user = action.payload.user
        },
        setLoading: (state) => {
            state.loading = true
        }
    }
})


const { getUser, setLoading } = chatHeaderSlice.actions

export const getUserTC = payload => dispatch => {
    dispatch(setLoading())
    dispatch(getUser({ user: payload }))
}

export default chatHeaderSlice.reducer