import { AuthNav } from 'components/AuthNav/AuthNav';
import { Header } from 'components/Layout/SharedLayout.styled';
import Navigation from 'components/Navigation/Navigation';

export const AppBar = () => {
    return (
        <Header>
            <Navigation />
            <AuthNav />
        </Header>
    );
};
