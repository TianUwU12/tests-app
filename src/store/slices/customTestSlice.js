import { createSlice } from "@reduxjs/toolkit";

const customTestSlice = createSlice({
  name: "customTestSlice",
  initialState: JSON.parse(localStorage.getItem("questions")) || [],

  reducers: {
    setCustomTest: (__, { payload }) => {
      localStorage.setItem("questions", JSON.stringify(payload));
      return payload;
    },
  },
});

export const { setCustomTest } = customTestSlice.actions;
export default customTestSlice.reducer;
