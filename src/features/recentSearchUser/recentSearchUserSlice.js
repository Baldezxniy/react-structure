import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    users: [],
    loading: false
}

const recentSearchUserSlice = createSlice({
    name: 'recentSearchUser',
    initialState,
    reducers: {
        getUsers: (state, action) => {
            state.users = action.payload.users
        },
        setLoding: (state) => {
            state.loading = true
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter(user => user.userId !== action.payload.userId)
        }
    }
})

const { getUsers, setLoding, deleteUser } = recentSearchUserSlice.actions

export const getUsersTC = (payload) => dispatch => {
    dispatch(getUsers({users:payload}))
    dispatch(setLoding())
}

export const deleteUserTC = (payload) => dispatch => {
    
    dispatch(deleteUser(payload))
}

export default recentSearchUserSlice.reducer