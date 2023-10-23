import {
    ButtonAdd,
    InputForm,
    LabelInput,
    PhonebookForm,
} from 'components/Form/Form.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/thunks';

const INITIAL_STATE = {
    email: '',
    password: '',
};

export const LoginForm = () => {
    const [email, setEmail] = useState(INITIAL_STATE.email);
    const [password, setPassword] = useState(INITIAL_STATE.password);

    const dispatch = useDispatch();

    const handleInput = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                setEmail(value);
                break;

            case 'password':
                setPassword(value);
                break;
            // no default
        }
    };

    const handleSignup = e => {
        e.preventDefault();

        dispatch(logIn({ email, password }));

        resetForm();
    };

    const resetForm = () => {
        setEmail(INITIAL_STATE.email);
        setPassword(INITIAL_STATE.password);
    };

    return (
        <PhonebookForm onSubmit={handleSignup}>
            <LabelInput htmlFor="email">Email</LabelInput>
            <InputForm
                type="email"
                name="email"
                required
                value={email}
                onChange={handleInput}
                id="email"
                placeholder="mail@mail.com"
            />
            <LabelInput htmlFor="password">Password</LabelInput>
            <InputForm
                type="password"
                name="password"
                required
                value={password}
                onChange={handleInput}
                id="password"
                placeholder="password"
            />
            <ButtonAdd type="submit">Sing in</ButtonAdd>
        </PhonebookForm>
    );
};
