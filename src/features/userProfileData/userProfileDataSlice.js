import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: {
    },
    loading: false
}


const userProfileDataSlice = createSlice({
    name: 'userProfileData',
    initialState,
    reducers: {
        getUserData: (state, action) => {
            state.userData = action.payload.userData
        },
        setLaoding: (state) => {
            state.loading = true
        }
    }
})

const { getUserData, setLaoding } = userProfileDataSlice.actions

export const getUserDataTC = (payload) => dispatch => {
    dispatch(getUserData({ userData: payload }))
    dispatch(setLaoding())
}

export default userProfileDataSlice.reducer