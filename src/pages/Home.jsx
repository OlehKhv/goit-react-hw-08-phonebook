import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectLoggedIn, selectUserName } from 'redux/auth/selectors';

const Home = () => {
    const isLoggedIn = useSelector(selectLoggedIn);
    const name = useSelector(selectUserName);

    return (
        <section>
            <Typography
                variant="h2"
                mb={'20px'}
                sx={{ textAlign: 'center', fontWeight: '600' }}
            >
                Phonebook app.
            </Typography>
            {isLoggedIn ? (
                <Typography
                    variant="h4"
                    mb={'20px'}
                    sx={{ textAlign: 'center', fontWeight: '600' }}
                >
                    Welcome {name}! Want to go to the{' '}
                    <Link to="contacts">contacts</Link>?
                </Typography>
            ) : (
                <Typography
                    variant="h4"
                    mb={'20px'}
                    sx={{ textAlign: 'center', fontWeight: '600' }}
                >
                    Please <Link to="login">login</Link> to your account or{' '}
                    <Link to="register">sign up</Link>!
                </Typography>
            )}
        </section>
    );
};

export default Home;
