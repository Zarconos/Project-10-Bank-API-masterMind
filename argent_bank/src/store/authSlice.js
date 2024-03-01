// redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isAuthenticated: false
  },
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    signOut: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
    updateUser: (state, action) => {
      state.user = action.payload.user;
    }
  }
});

export const { signIn, signOut, updateUser } = authSlice.actions;

export default authSlice.reducer;
