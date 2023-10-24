import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './Layout/SharedLayout';

import { lazy } from 'react';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const NotFound = lazy(() => import('pages/NotFound'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route path="register" element={<Register />} />
                    <Route path="login" element={<Login />} />
                    <Route path="contacts" element={<Contacts />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
};
