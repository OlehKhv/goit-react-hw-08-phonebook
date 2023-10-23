import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filter/slice';
import { contactsReducer } from './contacts/slice';
import { authReducer } from './auth/slice';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
        auth: authReducer,
    },
});
