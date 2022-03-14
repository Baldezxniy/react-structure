import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    contacts: [],
    loading: false
}
const contactListSortSlice = createSlice({
    name: 'contactListSort',
    initialState,
    reducers: {
        getContacts: (state, acttion) => {
            state.contacts = acttion.payload.contacts
        },
        setLoading: (state) => {
            state.loading = true
        }
    }
})


const { getContacts, setLoading } = contactListSortSlice.actions


export const getContactsTC = (pyload) => dispatch => {
    dispatch(getContacts({ contacts: pyload }))
    dispatch(setLoading())
}


export default contactListSortSlice.reducer 