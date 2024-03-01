// actions.js
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { userLogin } from "../api/api";

// Action pour la connexion de l'utilisateur
export const signInUser = createAsyncThunk(
  'user/signIn',
  async ({ email, password }) => {
    try {
      const response = await userLogin({ email, password });
      return response;
    } catch (error) {
      throw error;
    }
  }
);