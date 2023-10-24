import { StyledNavLink } from 'components/Layout/SharedLayout.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from 'redux/auth/selectors';

export const AuthNav = () => {
    const isLoggenIn = useSelector(selectLoggedIn);

    return isLoggenIn ? (
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
