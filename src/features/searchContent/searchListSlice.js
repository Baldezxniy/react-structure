import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: [],
    loading: false
}

const searchListSlice = createSlice({
    name: 'searchList',
    initialState,
    reducers: {
        getSearch: (state, action) => {
            state.search = action.payload.search
        },
        setLoading: (state) => {
            state.loading = true
        }
    }
})

const { getSearch, setLoading } = searchListSlice.actions

export const getSearchTC = payload => dispatch => {
    dispatch(getSearch({search:payload}))
    dispatch(setLoading())
}

export default searchListSlice.reducer