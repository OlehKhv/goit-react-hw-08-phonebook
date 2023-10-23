import { MainTitle } from 'components/App.styled';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <section>
            <MainTitle>Welcome to Phonebook application</MainTitle>
            <h2>
                Please <Link to="login">login</Link> to your account or{' '}
                <Link to="register">sign up</Link>!
            </h2>
        </section>
    );
};

export default Home;
