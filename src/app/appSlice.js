import { createSlice } from "@reduxjs/toolkit";
import { getMyDataTC } from "../features/profile/profileSlice";

const initialState = {
    initialization: false
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        getInitialization: (state, action) => {

            state.initialization = action.payload.initialization
        }
    }
})

const { getInitialization } = appSlice.actions;

export const initializationSucses = (payload) => dispatch => {

    dispatch(getMyDataTC(payload))
    dispatch(getInitialization({ initialization: true }))
}

export default appSlice.reducer