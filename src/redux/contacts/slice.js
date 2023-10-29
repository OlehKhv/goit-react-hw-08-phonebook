import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchAllContacts, deleteContact, addContact } from './thunks';
import {
    handleAddFulfilled,
    handleDeleteFulfilled,
    handleFetchAllFulfilled,
    handleFulfilled,
    handlePending,
    handleRejected,
} from './helpers';

const contactsInitialState = {
    items: [],
    isLoading: false,
    error: null,
};

const contactsSlice = createSlice({
    name: 'contacts',

    initialState: contactsInitialState,

    extraReducers: builder => {
        builder
            .addCase(fetchAllContacts.fulfilled, handleFetchAllFulfilled)
            .addCase(deleteContact.fulfilled, handleDeleteFulfilled)
            .addCase(addContact.fulfilled, handleAddFulfilled)
            .addMatcher(
                isAnyOf(
                    fetchAllContacts.pending,
                    deleteContact.pending,
                    addContact.pending
                ),
                handlePending
            )
            .addMatcher(
                isAnyOf(
                    fetchAllContacts.rejected,
                    deleteContact.rejected,
                    addContact.rejected
                ),
                handleRejected
            )
            .addMatcher(
                isAnyOf(
                    fetchAllContacts.fulfilled,
                    deleteContact.fulfilled,
                    addContact.fulfilled
                ),
                handleFulfilled
            );
    },
});

export const contactsReducer = contactsSlice.reducer;
