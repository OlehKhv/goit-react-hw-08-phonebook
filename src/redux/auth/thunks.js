import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    currentUser,
    loginUser,
    logoutUser,
    signupUser,
} from 'services/contactsApi';

export const signUp = createAsyncThunk(
    'auth/signup',
    async (user, { rejectWithValue }) => {
        try {
            return await signupUser(user);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const logIn = createAsyncThunk(
    'auth/login',
    async (user, { rejectWithValue }) => {
        try {
            return await loginUser(user);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            return await logoutUser();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const refresh = createAsyncThunk(
    'auth/refresh',
    async (_, { rejectWithValue }) => {
        try {
            return await currentUser();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);
