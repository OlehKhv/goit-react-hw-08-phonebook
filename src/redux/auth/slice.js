import { createSlice } from '@reduxjs/toolkit';
import { signUp, logIn, logOut } from './thunks';
import { refresh } from 'redux/auth/thunks';

const initialState = {
    user: { name: null, email: null },
    isLoggedIn: false,
    token: null,
    isLoading: false,
    isRefreshing: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',

    initialState,

    extraReducers: {
        [signUp.pending](state) {
            state.isLoading = true;
        },
        [signUp.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [signUp.rejected](state, { payload }) {
            state.isLoading = false;
            state.error = payload;
        },
        [logIn.pending](state) {
            state.isLoading = true;
        },
        [logIn.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [logIn.rejected](state, { payload }) {
            state.isLoading = false;
            state.error = payload;
        },
        [logOut.pending](state) {
            state.isLoading = true;
        },
        [logOut.fulfilled](state) {
            state.isLoading = false;
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [logOut.rejected](state, { payload }) {
            state.isLoading = false;
            state.error = payload;
        },
        [refresh.pending](state) {
            state.isRefreshing = true;
        },
        [refresh.fulfilled](state, { payload }) {
            state.isRefreshing = false;
            state.user = payload;
            state.isLoggedIn = true;
        },
        [refresh.rejected](state, { payload }) {
            state.isRefreshing = false;
            state.error = payload;
        },
    },
});

export const authReducer = authSlice.reducer;
