import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: {
        id: null,
        firstName: null,
        lastName: null,
        userName: null,
        avatar: null,
        telephone: null,
        discription: null,
        online: null
    },
    isLoading: false
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        getMyData: (state, action) => {
            state.user = action.payload
        },
        getLoading: (state, action) => {
            state.isLoading = action.payload.loading
        },
        editFirstName: (state, action) => {
            state.user.firstName = action.payload.firstName;
        },
        editLastName: (state, action) => {
            state.user.lastName = action.payload.lastName
        },
        editUserName: (state, action) => {
            state.user.userName = action.payload.userName
        },
        editDiscription: (state, action) => {
            state.user.discription = action.payload.discription
        }
    }
})


const { getMyData, getLoading, editFirstName, editLastName, editUserName, editDiscription } = profileSlice.actions

export const getMyDataTC = (payload) => (dispatch) => {
    dispatch(getLoading({ loading: false }));
    dispatch(getMyData(payload));
    dispatch(getLoading({ loading: true }))
}

export const editName = payload => dispatch => {
    dispatch(editFirstName({ firstName: payload.firstName }));
    dispatch(editLastName({ lastName: payload.lastName }))
}

export const editUserNameTC = payload => dispatch => {
    dispatch(editUserName({ userName: payload.userName }))
}

export const editDiscriptionTC = payload => dispatch => {
    dispatch(editDiscription({ discription: payload.discription }))
}

export default profileSlice.reducer