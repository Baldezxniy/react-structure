import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    folders: [],
    content: [],
    loading: false
}

const userProfileContentSlice = createSlice({
    name: 'userProfileContent',
    initialState,
    reducers: {
        getFolders: (state, action) => {
            state.folders = action.payload.folders
        },
        getContent: (state, action) => {
            state.content = action.payload.content
        },
        setLoading: (state) => {
            state.loading = true
        },
        deleteContent: (state, action) => {
            state.content = state.content.filter(item => !action.payload.deleteContent.includes(item.imgId))
        }
    }
})

const { getFolders, getContent, deleteContent, setLoading } = userProfileContentSlice.actions

export const getContentTC = payload => dispatch => {
    dispatch(getFolders({ folders: payload.folders }))
    dispatch(getContent({ content: payload.content }))
    dispatch(setLoading())
}

export const deleteContentTC = payload => dispatch => {
    dispatch(deleteContent({ deleteContent: payload }))
}

export default userProfileContentSlice.reducer