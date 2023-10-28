import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectLoggedIn, selectRefreshing } from 'redux/auth/selectors';

export const PrivateRoute = ({ children }) => {
    const isLoggedIn = useSelector(selectLoggedIn);
    const isRefreshing = useSelector(selectRefreshing);
    const shouldRedirect = !isLoggedIn && !isRefreshing;
    const location = useLocation();

    return shouldRedirect ? (
        <Navigate to="/login" state={location} />
    ) : (
        children
    );
};
