import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filter/slice';
import { contactsReducer } from './contacts/slice';
import { authReducer } from './auth/slice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
        auth: persistReducer(persistConfig, authReducer),
    },
});

export const persistor = persistStore(store);
