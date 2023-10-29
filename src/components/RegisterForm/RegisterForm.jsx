import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUp } from 'redux/auth/thunks';

const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
};

export const RegisterForm = () => {
    const [name, setName] = useState(INITIAL_STATE.name);
    const [email, setEmail] = useState(INITIAL_STATE.email);
    const [password, setPassword] = useState(INITIAL_STATE.password);

    const dispatch = useDispatch();

    const handleSignUp = async e => {
        e.preventDefault();

        try {
            await dispatch(signUp({ name, email, password })).unwrap();
            toast.success(`Welcome ${name}`);
        } catch (error) {
            toast.error('Invalid Email or Password ');
        }

        resetForm();
    };

    const resetForm = () => {
        setName(INITIAL_STATE.name);
        setEmail(INITIAL_STATE.email);
        setPassword(INITIAL_STATE.password);
    };

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': {
                    m: 1,
                    width: '500px',
                    maxWidth: '100%',
                },
            }}
            noValidate
            onSubmit={handleSignUp}
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
                label="Email address"
                helperText="We'll never share your email."
                placeholder="mail@mail.com"
                type="email"
                value={email}
                onChange={({ target }) => {
                    setEmail(target.value);
                }}
            />
            <TextField
                label="Password"
                helperText="You should not share the password with anyone!"
                placeholder="password"
                type="password"
                value={password}
                onChange={({ target }) => {
                    setPassword(target.value);
                }}
            />
            <Button variant="outlined" type="submit" size="large">
                Sign up
            </Button>
            <Typography>
                Already have an account? Please{' '}
                <Link to="/login" underline="hover">
                    login
                </Link>
                .
            </Typography>
        </Box>
    );
};
