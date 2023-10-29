import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectContacts,
    selectError,
    selectFilteredContacts,
    selectLoading,
} from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/thunks';
import { Loader } from 'components/Loader/Loader';
import { Notification } from 'components/Notification/Notification';
// import { ErrorNotification } from 'components/Notification/ErrorNotification';
import { selectFilter } from 'redux/filter/selectors';
import { NotFoundNotification } from 'components/Notification/NotFoundNotification';
import {
    Avatar,
    Box,
    Card,
    IconButton,
    Stack,
    Typography,
} from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import toast from 'react-hot-toast';

export const ContactsList = () => {
    const dispatch = useDispatch();

    const contacts = useSelector(selectContacts);
    const visibleContacts = useSelector(selectFilteredContacts);
    const error = useSelector(selectError);
    const isLoading = useSelector(selectLoading);
    const filter = useSelector(selectFilter);

    const handleDeleteContact = async (id, name) => {
        try {
            await dispatch(deleteContact(id)).unwrap();
            toast.success(`${name} deleted!`);
        } catch (error) {
            toast.error(`Something went wrong. Error: ${error}.`);
        }
    };

    return (
        <Box
            sx={{
                width: '100%',
                borderTop: '1px solid black',
                padding: '40px 0',
            }}
        >
            <Typography
                variant="h5"
                mb={'20px'}
                sx={{ textAlign: 'center', fontWeight: '600' }}
            >
                Contacts
            </Typography>

            {isLoading && <Loader />}

            {!isLoading && visibleContacts.length > 0 && (
                <Stack spacing={2}>
                    {visibleContacts.map(({ id, name, number }) => {
                        return (
                            <Card
                                key={id}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Avatar
                                    sx={{
                                        bgcolor: deepPurple[500],
                                    }}
                                >
                                    {name[0]}
                                </Avatar>
                                <Typography variant="body">
                                    {name}: {number}
                                </Typography>
                                <IconButton
                                    aria-label="delete"
                                    size="large"
                                    color="error"
                                    onClick={() => {
                                        handleDeleteContact(id, name);
                                    }}
                                >
                                    <PersonRemoveIcon fontSize="inherit" />
                                </IconButton>
                            </Card>
                        );
                    })}
                </Stack>
            )}

            {!error && !isLoading && contacts.length === 0 && (
                <Notification>Your phone book is empty!</Notification>
            )}

            {/* {error && !isLoading && (
                <ErrorNotification>
                    Oops... Something went wrong. Error: {error}. Please, try
                    again.
                </ErrorNotification>
            )} */}

            {filter && !isLoading && visibleContacts.length === 0 && (
                <NotFoundNotification>
                    No contacts matching your search query: "{filter}". Please
                    change your search parameters and try again.
                </NotFoundNotification>
            )}
        </Box>
    );
};
