// reducers/userReducer.js
import { createReducer } from '@reduxjs/toolkit';
import { signInUser } from '../actions';

const initialState = {
  user: null,
  token: null,
  error: null,
  loading: false,
};

const userReducer = createReducer(initialState, {
  [signInUser.pending]: (state) => {
    state.loading = true;
  },
  [signInUser.fulfilled]: (state, action) => {
    state.loading = false;
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.error = null;
  },
  [signInUser.rejected]: (state, action) => {
    state.loading = false;
    state.error = action.error.message;
  },
  // Ajouter d'autres reducers si nécessaire
});

export default userReducer;
