import {
    ButtonAdd,
    InputForm,
    LabelInput,
    PhonebookForm,
} from 'components/Form/Form.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/thunks';

const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
};

const RegisterForm = () => {
    const [name, setName] = useState(INITIAL_STATE.name);
    const [email, setEmail] = useState(INITIAL_STATE.name);
    const [password, setPassword] = useState(INITIAL_STATE.name);

    const dispatch = useDispatch();

    const handleInput = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                setName(value);
                break;

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

        dispatch(signUp({ name, email, password }));

        resetForm();
    };

    const resetForm = () => {
        setName(INITIAL_STATE.name);
        setEmail(INITIAL_STATE.email);
        setPassword(INITIAL_STATE.password);
    };

    return (
        <PhonebookForm onSubmit={handleSignup}>
            <LabelInput htmlFor="name">Name</LabelInput>
            <InputForm
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={handleInput}
                id="name"
                placeholder="🙍‍♂️   Alex Smith"
            />
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

export default RegisterForm;
