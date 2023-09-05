import {  configureStore } from "@reduxjs/toolkit";
import tableReducers from './table';

const store = configureStore({
    reducer : {
            table : tableReducers 
    }
});

export default store;