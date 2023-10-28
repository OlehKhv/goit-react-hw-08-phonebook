import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Nav, StyledNavLink } from 'components/Layout/SharedLayout.styled';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from 'redux/auth/selectors';

const Navigation = () => {
    const isLoggenIn = useSelector(selectLoggedIn);

    return (
        <>
            <Nav>
                <StyledNavLink to="/">Home</StyledNavLink>
                {isLoggenIn && (
                    <StyledNavLink to="contacts">Contacts</StyledNavLink>
                )}
            </Nav>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Recents" />
                <BottomNavigationAction label="Favorites" />
                <BottomNavigationAction label="Nearby" />
            </BottomNavigation>
        </>
    );
};

export default Navigation;
