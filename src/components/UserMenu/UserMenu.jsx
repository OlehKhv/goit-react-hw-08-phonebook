import {
    Avatar,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Tooltip,
    Typography,
} from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserName } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/thunks';

export const UserMenu = () => {
    const [anchorElUser, setAnchorElUser] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const name = useSelector(selectUserName);

    const handleLogout = () => {
        handleCloseUserMenu();
        dispatch(logOut());
    };

    const handleNavigateToProfile = () => {
        handleCloseUserMenu();
        navigate('profile');
    };

    const handleOpenUserMenu = event => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar sx={{ bgcolor: deepPurple[500] }}>{name[0]}</Avatar>
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleNavigateToProfile}>
                    <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                    <Typography textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>
        </Box>
    );
};
