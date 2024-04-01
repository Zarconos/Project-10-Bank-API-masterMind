import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const userLogin = createAsyncThunk(
    'store/userLogin',
    async ({ email, password }, { rejectWithValue }) => {
      try {
        const response = await fetch(`http://localhost:3001/api/v1/user/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });


        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('authToken', data.token);
          return data;
        } else {

          const errorMessage = await response.text();
          return rejectWithValue(errorMessage);
        }
      } catch (error) {
        throw error;
      }
    }
);

export const userProfile = createAsyncThunk('store/userProfile', async (token) => {
    try {
        const response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Error in fetching user profile');
        }
    } catch (error) {
        throw error;
    }
});

export const userUpdateProfile = createAsyncThunk('store/userUpdateProfile', async ({ newFirstName, newLastName, token }) => {
    try {
        const response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ firstName: newFirstName, lastName: newLastName })
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Error in updating user profile');
        }
    } catch (error) {
        throw error;
    }
});

export const profilEdit = createAction("store/profilEdit");

export const clearStore = createAction("store/clearStore");
