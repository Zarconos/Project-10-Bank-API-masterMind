import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userProfile, userUpdateProfile } from '../redux/action';

const initialState = {
    isLoggedIn: false,
    user: {
        firstName: null,
        lastName: null,
        email: null,
        isEditing: false,
    },
    authToken: null,
};

const storeSlice = createSlice({
    name: "store",
    initialState: initialState,
    reducers: {
        logout: (state) => {
            state.isLoggedIn = false;
            state.user.firstName = null;
            state.user.lastName = null;
            state.user.email = null;
            state.user.isEditing = false;
            state.authToken = null;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(userLogin.fulfilled, (state, action) => {
                const { token } = action.payload.body;

                state.isLoggedIn = true;
                state.authToken = token;
            })
            .addCase(userProfile.fulfilled, (state, action) => {
                const { firstName, lastName, email } = action.payload.body;

                state.user.firstName = firstName;
                state.user.lastName = lastName;
                state.user.email = email;
            })
            .addCase(userUpdateProfile.fulfilled, (state, action) => {
                const { firstName, lastName } = action.payload.body;

                state.user.firstName = firstName;
                state.user.lastName = lastName;
            });
    },
});

export const { logout } = storeSlice.actions;

export default storeSlice.reducer;