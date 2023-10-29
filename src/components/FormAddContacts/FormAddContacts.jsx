import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/thunks';
import { Box, Button, TextField } from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import toast from 'react-hot-toast';

const INITIAL_STATE = {
    name: '',
    number: '',
};

export const FormAddContacts = () => {
    const [name, setName] = useState(INITIAL_STATE.name);
    const [number, setNumber] = useState(INITIAL_STATE.number);

    const dispatch = useDispatch();

    const contacts = useSelector(selectContacts);

    const handleAddContact = async e => {
        e.preventDefault();

        if (contacts.some(contact => contact.name === name)) {
            alert(`${name} is already in contacts!`);
            resetForm();
            return;
        }

        try {
            await dispatch(addContact({ name, number })).unwrap();
            toast.success(`${name} added!`);
        } catch (error) {
            toast.error(`Something went wrong. Error: ${error}.`);
        }

        resetForm();
    };

    const resetForm = () => {
        setName(INITIAL_STATE.name);
        setNumber(INITIAL_STATE.number);
    };

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': {
                    m: 1,
                    width: '100%',
                },
            }}
            noValidate
            onSubmit={handleAddContact}
        >
            <TextField
                required
                label="Full name"
                placeholder="Alex Alex"
                value={name}
                onChange={({ target }) => {
                    setName(target.value);
                }}
            />
            <TextField
                required
                label="Number"
                placeholder="📞   222-22-22"
                type="tel"
                value={number}
                onChange={({ target }) => {
                    setNumber(target.value);
                }}
            />
            <Button
                variant="outlined"
                type="submit"
                size="large"
                startIcon={<PersonAddAlt1Icon />}
            >
                Add contact
            </Button>
        </Box>
    );
};
