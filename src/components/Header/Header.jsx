import { AppBar, Container, Toolbar } from '@mui/material';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';

export const Header = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Navigation />
                    <AuthNav />
                </Toolbar>
            </Container>
        </AppBar>
    );
};
