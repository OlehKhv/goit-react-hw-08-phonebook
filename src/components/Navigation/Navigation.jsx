import { Nav, StyledNavLink } from 'components/Layout/SharedLayout.styled';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from 'redux/auth/selectors';

const Navigation = () => {
    const isLoggenIn = useSelector(selectLoggedIn);

    return (
        <Nav>
            <StyledNavLink to="/">Home</StyledNavLink>
            {isLoggenIn && (
                <StyledNavLink to="contacts">Contacts</StyledNavLink>
            )}
        </Nav>
    );
};

export default Navigation;
