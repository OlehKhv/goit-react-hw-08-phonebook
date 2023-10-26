import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectLoggedIn } from 'redux/auth/selectors';

export const RestrictedRoute = ({ component: Component }) => {
    const isLoggedIn = useSelector(selectLoggedIn);

    const { state } = useLocation();

    return isLoggedIn ? <Navigate to={state ? state : '/'} /> : <Component />;
};
