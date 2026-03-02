import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: null,

  reducers: {
    login: (state, { payload }) => {
      return payload;
    },
    logout: (state) => {
      return null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
