import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  span: 1,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += state.span;
    },

    decrement: (state) => {
      state.value -= state.span;
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },

    setSpan: (state, action) => {
      state.span = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, setSpan } = counterSlice.actions;
export default counterSlice.reducer;
