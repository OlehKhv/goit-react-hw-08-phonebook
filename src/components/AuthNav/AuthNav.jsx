import { Box, Button } from '@mui/material';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectLoggedIn } from 'redux/auth/selectors';

export const AuthNav = () => {
    const isLoggedIn = useSelector(selectLoggedIn);

    const navigate = useNavigate();

    return isLoggedIn ? (
        <UserMenu />
    ) : (
        <Box
            sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
            }}
        >
            <Button
                onClick={() => navigate('login')}
                sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                }}
            >
                Login
            </Button>

            <Button
                onClick={() => navigate('register')}
                sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                }}
            >
                Sign up
            </Button>
        </Box>
    );
};
