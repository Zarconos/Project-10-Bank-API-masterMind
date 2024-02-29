// redux/authSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    signIn: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    signOut: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    updateUser: (state, action) => {
      // Add an action to update user information
      state.user = { ...state.user, ...action.payload };
    },
    // ... other reducers
  },
});

export const { signIn, signOut, updateUser } = authSlice.actions;

export default authSlice.reducer;
