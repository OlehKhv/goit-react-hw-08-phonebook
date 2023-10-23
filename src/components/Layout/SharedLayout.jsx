import { Outlet } from 'react-router-dom';
import { Container, Header, Nav, StyledNavLink } from './SharedLayout.styled';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

export const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <Nav>
                    <StyledNavLink to="/">Home</StyledNavLink>
                    <StyledNavLink to="contacts">Contacts</StyledNavLink>
                    <StyledNavLink to="register">SignUp</StyledNavLink>
                    <StyledNavLink to="login">Login</StyledNavLink>
                </Nav>
            </Header>
            <main>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
        </Container>
    );
};
