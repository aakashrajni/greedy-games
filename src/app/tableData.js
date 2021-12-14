import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import moment from 'moment';

const slice = createSlice({
    name: "tableData",
    initialState: {
        list: [],
        appNameList: [],
        tableDataDate: [new Date(),new Date()],
        loading: false,
    },

    reducers: {
        tableDataRequested: (tableData, action) => {
            tableData.loading = true;
        },

        tableDataReceived: (tableData, action) => {
            let actualList = action.payload.data;
            tableData.list = action.payload.data.map((data,index) =>{
                data.fill_rate = (actualList[index].requests/actualList[index].responses*100).toFixed(2) + " %"
                data.ctr = (actualList[index].clicks/actualList[index].impressions*100).toFixed(2) + " %"
                data.date = moment(new Date(actualList[index].date)).format("DD MMMM yyyy");
                data.requests = actualList[index].requests.toLocaleString();
                data.responses = actualList[index].responses.toLocaleString();
                data.impressions = actualList[index].impressions.toLocaleString();
                data.clicks = actualList[index].clicks.toLocaleString();
                data.revenue = "$ "+actualList[index].revenue.toLocaleString();
                let appNameData = tableData.appNameList.filter((appName) => appName.app_id === actualList[index].app_id);
                data.app_name = appNameData[0].app_name;
                return data
            })
            // tableData.list = action.payload;
            tableData.loading = false;
        },

        tableDataRequestFailed: (tableData, action) => {
            tableData.loading = false;
        },

        appNameRequested: (tableData, action) => {
            tableData.loading = true;
        },

        appNameReceived: (tableData, action) => {
            tableData.appNameList = action.payload.data;
            tableData.loading = false;
        },

        appNameRequestFailed: (tableData, action) => {
            tableData.loading = false;
        },
    },
});

export default slice.reducer;

const { tableDataRequested, tableDataReceived, tableDataRequestFailed, appNameRequested, appNameReceived, appNameRequestFailed } = slice.actions;

export const loadtableData = (url) => (dispatch) => { 
    
    return dispatch(
        apiCallBegan({
            url,
            onStart: tableDataRequested.type,
            onSuccess: tableDataReceived.type,
            onError: tableDataRequestFailed.type,
        })
    );
};

export const loadAppNameData = () => (dispatch) => {
    const url = "/apps";
    return dispatch(
        apiCallBegan({
            url,
            onStart: appNameRequested.type,
            onSuccess: appNameReceived.type,
            onError: appNameRequestFailed.type,
        })
    );
};