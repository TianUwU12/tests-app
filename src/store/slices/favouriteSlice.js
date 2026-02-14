import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favouriteSlice",
  //   initialState: JSON.parse(localStorage.getItem("theory")) || [], //х
  initialState: [], //х

  reducers: {
    addTheory: (state, { payload }) => {
      console.log(payload);
      //   localStorage.setItem("theory", JSON.stringify(payload));
      state.push(payload);
      // state.push(payload)
    },
    deleteTheory: (state, { payload }) => {
      console.log(payload);
      //   localStorage.setItem("theory", JSON.stringify(payload));
      const index = state.findIndex((elem) => elem.id === payload);
      //splice + index
      // state.push(payload)
    },
  },
});

export const { addTheory } = favouriteSlice.actions;
export default favouriteSlice.reducer;
