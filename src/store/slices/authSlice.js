import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: JSON.parse(localStorage.getItem("user")),

  reducers: {
    login: (_, { payload }) => {
      localStorage.setItem("user", JSON.stringify(payload));
      return payload;
    },
    logout: () => {
      return null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
