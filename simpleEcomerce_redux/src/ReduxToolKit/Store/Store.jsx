import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Slice/CartSsSlice"
const store = configureStore({
    reducer:{
        cart :cartSlice,
    }
})

export default store;