import { createSlice } from "@reduxjs/toolkit";
import { getMyDataTC } from "../features/profile/profileSlice";

const initialState = {
    i18n: null,
    initialization: false
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        getInitialization: (state, action) => {

            state.initialization = action.payload.initialization
        },
        getI18n: (state, action) => {
            state.i18n = action.payload.i18n
        }
    }
})

const { getInitialization, getI18n } = appSlice.actions;

export const initializationSucses = (payload) => dispatch => {

    dispatch(getMyDataTC(payload.profile))
    dispatch(getI18n({ i18n: payload.i18nHook }))
    dispatch(getInitialization({ initialization: true }))
}

export const getI18nTC = payload => dispatch => {
    dispatch(getI18n({ i18n: payload }))
}

export default appSlice.reducer