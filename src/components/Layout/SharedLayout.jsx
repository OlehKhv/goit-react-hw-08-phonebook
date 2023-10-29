import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Header } from 'components/Header/Header';
import { Container } from '@mui/material';

export const SharedLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Container maxWidth="sm" sx={{ mt: '40px' }}>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </Container>
            </main>
        </>
    );
};
