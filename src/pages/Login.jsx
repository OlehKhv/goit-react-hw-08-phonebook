import {
    ButtonAdd,
    InputForm,
    LabelInput,
    PhonebookForm,
} from 'components/Form/Form.styled';
import React from 'react';

const Login = () => {
    return (
        <PhonebookForm>
            <LabelInput htmlFor="email">Email</LabelInput>
            <InputForm
                type="email"
                name="email"
                required
                id="email"
                placeholder="mail@mail.com"
            />
            <LabelInput htmlFor="password">Password</LabelInput>
            <InputForm type="password" name="password" required id="password" />
            <ButtonAdd type="submit">Sing in</ButtonAdd>
        </PhonebookForm>
    );
};

export default Login;
