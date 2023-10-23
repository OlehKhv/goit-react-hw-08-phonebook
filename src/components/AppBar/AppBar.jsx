import { useDispatch, useSelector } from 'react-redux';
import {
    Header,
    Nav,
    StyledNavLink,
} from 'components/Layout/SharedLayout.styled';
import { selectLoggedIn, selectUserName } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/thunks';

export const AppBar = () => {
    const name = useSelector(selectUserName);
    const isLoggenIn = useSelector(selectLoggedIn);
    const dispatch = useDispatch();

    return (
        <Header>
            <Nav>
                <StyledNavLink to="/">Home</StyledNavLink>
                <StyledNavLink to="contacts">Contacts</StyledNavLink>
                <StyledNavLink to="register">Sign up</StyledNavLink>
                <StyledNavLink to="login">Login</StyledNavLink>
            </Nav>

            {isLoggenIn && (
                <div>
                    <p>{name}</p>
                    <button
                        onClick={() => {
                            dispatch(logOut());
                        }}
                    >
                        Logout
                    </button>
                </div>
            )}
        </Header>
    );
};
