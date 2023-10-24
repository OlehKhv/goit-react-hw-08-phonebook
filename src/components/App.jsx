import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './Layout/SharedLayout';

import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refresh } from 'redux/auth/thunks';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { selectRefreshing } from 'redux/auth/selectors';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const NotFound = lazy(() => import('pages/NotFound'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));

export const App = () => {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectRefreshing);

    useEffect(() => {
        dispatch(refresh());
    }, [dispatch]);

    return (
        !isRefreshing && (
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route
                        path="register"
                        element={<RestrictedRoute component={Register} />}
                    />
                    <Route
                        path="login"
                        element={<RestrictedRoute component={Login} />}
                    />
                    <Route
                        path="contacts"
                        element={<PrivateRoute component={Contacts} />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        )
    );
};
