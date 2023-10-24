import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const token = {
    setToken(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const signupUser = async user => {
    const { data } = await axios.post('/users/signup', user);
    token.setToken(data.token);
    return data;
};

export const loginUser = async user => {
    const { data } = await axios.post('/users/login', user);
    token.setToken(data.token);
    return data;
};

export const logoutUser = async () => {
    await axios.post('/users/logout');
    token.unset();
};

export const currentUser = async () => {
    const { data } = await axios('/users/current');
    return data;
};

export const getAllContacts = async () => {
    const { data } = await axios('/contacts');
    return data;
};

export const removeContact = async id => {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data.id;
};

export const newContact = async contact => {
    const { data } = await axios.post('/contacts', contact);
    console.log(data);
    return data;
};
