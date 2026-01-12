import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 }, //х

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    addNum: (state, { payload }) => {
      console.log(payload);

      state.value += payload;
    },
  },
});

export const { increment, decrement, addNum } = counterSlice.actions;
export default counterSlice.reducer;
