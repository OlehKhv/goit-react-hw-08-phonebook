import { useSelector } from 'react-redux';
import { selectLoggedIn } from 'redux/auth/selectors';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import MenuIcon from '@mui/icons-material/Menu';
import {
    Box,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Typography,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Navigation = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const isLoggedIn = useSelector(selectLoggedIn);

    const navigate = useNavigate();

    const handleOpenNavMenu = event => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleNavigateToHome = () => {
        handleCloseNavMenu();
        navigate('/');
    };

    const handleNavigateToContacts = () => {
        handleCloseNavMenu();
        navigate('contacts');
    };

    const handleNavigateToLogin = () => {
        handleCloseNavMenu();
        navigate('login');
    };

    const handleNavigateToSignUp = () => {
        handleCloseNavMenu();
        navigate('register');
    };

    return (
        <>
            <ContactPhoneIcon
                sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            />
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/goit-react-hw-08-phonebook"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                Phonebook
            </Typography>
            <Box
                sx={{
                    flexGrow: 1,
                    display: { xs: 'flex', md: 'none' },
                }}
            >
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    <MenuItem onClick={handleNavigateToHome}>
                        <Typography textAlign="center">Home</Typography>
                    </MenuItem>
                    {isLoggedIn && (
                        <MenuItem onClick={handleNavigateToContacts}>
                            <Typography textAlign="center">Contacts</Typography>
                        </MenuItem>
                    )}
                    {!isLoggedIn && (
                        <MenuItem onClick={handleNavigateToLogin}>
                            <Typography textAlign="center">Login</Typography>
                        </MenuItem>
                    )}
                    {!isLoggedIn && (
                        <MenuItem onClick={handleNavigateToSignUp}>
                            <Typography textAlign="center">Sign up</Typography>
                        </MenuItem>
                    )}
                </Menu>
            </Box>
            <ContactPhoneIcon
                sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
            />
            <Typography
                variant="h5"
                noWrap
                component="a"
                href="/goit-react-hw-08-phonebook"
                sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                Phonebook
            </Typography>
            <Box
                sx={{
                    flexGrow: 1,
                    display: { xs: 'none', md: 'flex' },
                }}
            >
                <Button
                    onClick={handleNavigateToHome}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    Home
                </Button>
                {isLoggedIn && (
                    <Button
                        onClick={handleNavigateToContacts}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        Contacts
                    </Button>
                )}
            </Box>
        </>
    );
};
