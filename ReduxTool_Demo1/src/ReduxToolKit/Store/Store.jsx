import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../Slice/CounterSlice";
let store = configureStore({
    reducer:{
       counter:CounterSlice,
    }
});

export default store;