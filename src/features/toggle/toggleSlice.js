import { createSlice } from '@reduxjs/toolkit';

export const toggleSlice = createSlice({
    name: 'toggle',
    initialState: {
        value: false,
        selectedDate: [new Date(),new Date()],
        tableHeader: [
            {
                order: 0,
                visibility: true,
                Header: 'Date',
                accessor: 'date',
            },
            {
                order: 1,
                visibility: true,
                Header: 'App Name',
                accessor: 'app_id',
            },
            {
                order: 2,
                visibility: true,
                Header: 'AD Request',
                accessor: 'requests',
            },
            {
                order: 3,
                visibility: true,
                Header: 'AD Response',
                accessor: 'responses',
            },
            {
                order: 4,
                visibility: true,
                Header: 'Impression',
                accessor: 'impressions',
            },
            {
                order: 5,
                visibility: true,
                Header: 'Clicks',
                accessor: 'clicks',
            },
            {
                order: 6,
                visibility: true,
                Header: 'Revenue',
                accessor: 'revenue',
            },
        ]
    },
    reducers: {
        toggle: (state) => {
            state.value = !state.value;
        },
        changeDate: (state,action) =>{
            console.log(state.selectedDate,action);
            state.selectedDate = action.payload;
        }
    },
})

export const { toggle, changeDate } = toggleSlice.actions

export default toggleSlice.reducer