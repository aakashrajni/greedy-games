import { createSlice } from '@reduxjs/toolkit';

export const toggleSlice = createSlice({
    name: 'toggle',
    initialState: {
        value: false,
        selectedDate: [new Date(),new Date()],
    },
    reducers: {
        toggle: (state) => {
            state.value = !state.value;
        },
        changeDate: (state,action) =>{
            state.selectedDate = action.payload;
        }
    },
})

export const { toggle, changeDate } = toggleSlice.actions

export default toggleSlice.reducer