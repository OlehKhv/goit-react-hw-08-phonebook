import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectLoggedIn, selectRefreshing } from 'redux/auth/selectors';

export const PrivateRoute = ({ component: Component }) => {
    const isLoggedIn = useSelector(selectLoggedIn);
    const isRefreshing = useSelector(selectRefreshing);
    const shouldRedirect = !isLoggedIn && !isRefreshing;
    const location = useLocation();

    return shouldRedirect ? (
        <Navigate to="/login" state={location} />
    ) : (
        <Component />
    );
};
