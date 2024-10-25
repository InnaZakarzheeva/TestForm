import { createSlice } from "@reduxjs/toolkit";

export const appReducer = createSlice({
  name: 'app',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    setIsUserLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setIsUserLoggedIn } = appReducer.actions;
