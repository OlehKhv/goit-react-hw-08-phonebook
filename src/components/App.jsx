// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchAllContacts } from 'redux/contacts/thunks';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './Layout/SharedLayout';

import { lazy } from 'react';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const NotFound = lazy(() => import('pages/NotFound'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));

export const App = () => {
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchAllContacts());
    // }, [dispatch]);

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

// Маршрутизація
// Додай маршрутизацію з бібліотекою React Router. У програмі має бути кілька сторінок:

// /register - публічний маршрут реєстрації нового користувача з формою
// /login - публічний маршрут логіна існуючого користувача з формою
// /contacts - приватний маршрут для роботи зі списком контактів користувача
// Додай компонент навігації Navigation з посиланнями для переходу по маршрутах.

// Меню користувача
// Створи компонент UserMenu, що відображає пошту користувача і кнопку виходу з облікового запису. Ось як може виглядати його розмітка.
