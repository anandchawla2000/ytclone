import { configureStore } from "@reduxjs/toolkit";
import dataListSlice from './dataListSlice'
const store=configureStore({
    reducer:{
        data:dataListSlice
    }
})
export default store