import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
    name: "tableData",
    initialState: {
        list: [],
        loading: false,
    },

    reducers: {
        tableDataRequested: (tableData, action) => {
            tableData.loading = true;
        },

        tableDataReceived: (tableData, action) => {
            tableData.list = action.payload;
            tableData.loading = false;
        },

        tableDataRequestFailed: (tableData, action) => {
            tableData.loading = false;
        },
    },
});

export default slice.reducer;

const { tableDataRequested, tableDataReceived, tableDataRequestFailed } = slice.actions;

const url = "/report?startDate=2021-06-01&endDate=2021-06-30";

export const loadtableData = () => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url,
            onStart: tableDataRequested.type,
            onSuccess: tableDataReceived.type,
            onError: tableDataRequestFailed.type,
        })
    );
};