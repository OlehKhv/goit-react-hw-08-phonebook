import { Box, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/slice';

export const Filter = () => {
    const dispatch = useDispatch();

    return (
        <Box
            mt={'40px'}
            sx={{
                borderTop: '1px solid black',
                padding: '40px 0',
            }}
        >
            <TextField
                label="🔍Search contact"
                placeholder="Enter name"
                onChange={({ target: { value } }) => {
                    dispatch(setFilter(value));
                }}
                fullWidth
            />
        </Box>
    );
};
