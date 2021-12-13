import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import toggleReducer from '../features/toggle/toggleSlice';
import tableDataReducer from './tableData';
import api from './middleware/api';

export default configureStore({
    reducer: {
        toggle: toggleReducer,
        tableData: tableDataReducer,
    },
    middleware: [...getDefaultMiddleware(), api],
})