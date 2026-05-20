

import { createSlice } from "@reduxjs/toolkit";

let initialValue = 0;

let CounterSlice = createSlice({
    name: "counter",
    initialState: initialValue,

    reducers: {
        add(state) {
            return state + 1;
        },

        sub(state) {
            return state - 1;
        }
    }
});

export const { add, sub } = CounterSlice.actions;

export default CounterSlice.reducer;