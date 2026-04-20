import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favouriteSlice",
  initialState: [],

  reducers: {
    toggleTheory: (state, { payload }) => {
      const existTheoryIndex = state.findIndex(
        (theory) => theory.id === payload.id,
      );
      if (existTheoryIndex != -1) {
        state.splice(existTheoryIndex, 1);
      } else {
        state.push(payload);
      }
    },
  },
});

export const { toggleTheory } = favouriteSlice.actions;
export default favouriteSlice.reducer;
