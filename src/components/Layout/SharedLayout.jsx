import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import { AppBar } from 'components/AppBar/AppBar';

export const SharedLayout = () => {
    return (
        <Container>
            <AppBar />
            <main>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
        </Container>
    );
};
