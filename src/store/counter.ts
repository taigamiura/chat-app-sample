import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CounterState = {
    counter: number;
};

const initialState: CounterState = {
    counter: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            state.counter += action.payload;
        },
        decrement: (state, action: PayloadAction<number>) => {
            state.counter -= action.payload;
        },
        multiply: (state, action: PayloadAction<number>) => {
            state.counter *= action.payload;
        },
        divide: (state, action: PayloadAction<number>) => {
            state.counter /= action.payload;
        },
        reset: (state) => {
            state.counter = 0;
        },
    },
});
export const counter = counterSlice.reducer;
export const { increment, decrement, multiply, divide, reset } = counterSlice.actions;
