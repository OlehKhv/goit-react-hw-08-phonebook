import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectLoggedIn } from 'redux/auth/selectors';

export const RestrictedRoute = ({ component: Component }) => {
    const isLoggedIn = useSelector(selectLoggedIn);

    return isLoggedIn ? <Navigate to="/" /> : <Component />;
};
