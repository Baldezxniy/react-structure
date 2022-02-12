import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: {

    },
    loading: false
}

const userProfileListInfoSlice = createSlice({
    name: 'userProfileListInfo',
    initialState,
    reducers: {
        getUserInfo: (state, action) => {
            state.userInfo = action.payload.userInfo
        },
        setLoading: (state) => {
            state.loading = true
        },
        setNotification: (state, action) => {
            
            state.userInfo.notification = action.payload.notification
        }
    }
})

const { getUserInfo, setLoading, setNotification } = userProfileListInfoSlice.actions


export const getUserInfoTC = (payload) => dispatch => {
    dispatch(getUserInfo({ userInfo: payload }))
    dispatch(setLoading())
}

export const setNotificationTC = (paylod) => dispatch => {
    dispatch(setNotification({ notification: paylod }))
}


export default userProfileListInfoSlice.reducer