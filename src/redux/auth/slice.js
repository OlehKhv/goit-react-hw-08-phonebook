import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { signUp, logIn, logOut, refresh } from './thunks';
import {
    handleFulfilled,
    handleLoginFulfilled,
    handleLogoutFulfilled,
    handlePending,
    handlePendingRefresh,
    handleRefreshFulfilled,
    handleRejected,
    handleRejectedRefresh,
    handleSignUpFulfilled,
} from './helpers';

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

    extraReducers: builder => {
        builder
            .addCase(signUp.fulfilled, handleSignUpFulfilled)
            .addCase(logIn.fulfilled, handleLoginFulfilled)
            .addCase(logOut.fulfilled, handleLogoutFulfilled)
            .addCase(refresh.fulfilled, handleRefreshFulfilled)
            .addCase(refresh.pending, handlePendingRefresh)
            .addCase(refresh.rejected, handleRejectedRefresh)
            .addMatcher(
                isAnyOf(signUp.pending, logIn.pending, logOut.pending),
                handlePending
            )
            .addMatcher(
                isAnyOf(signUp.rejected, logIn.rejected, logOut.rejected),
                handleRejected
            )
            .addMatcher(
                isAnyOf(signUp.fulfilled, logIn.fulfilled, logOut.fulfilled),
                handleFulfilled
            );
    },
});

export const authReducer = authSlice.reducer;
