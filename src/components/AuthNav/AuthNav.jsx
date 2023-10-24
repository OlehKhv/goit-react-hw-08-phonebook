import { StyledNavLink } from 'components/Layout/SharedLayout.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from 'redux/auth/selectors';

export const AuthNav = () => {
    const isLoggedIn = useSelector(selectLoggedIn);

    return isLoggedIn ? (
        <UserMenu />
    ) : (
        <ul>
            <li>
                <StyledNavLink to="register">Sign up</StyledNavLink>
            </li>
            <li>
                <StyledNavLink to="login">Login</StyledNavLink>
            </li>
        </ul>
    );
};
