import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section>
            <h2>Not Found</h2>
            <Link to={'/'}>Back to home</Link>
        </section>
    );
};

export default NotFound;
