import { ContactsList } from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import Form from 'components/Form/Form';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllContacts } from 'redux/contacts/thunks';

const Contacts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllContacts());
    }, [dispatch]);

    return (
        <>
            <section>
                <Form />
            </section>
            <section>
                <Filter />
            </section>
            <section>
                <ContactsList />
            </section>
        </>
    );
};

export default Contacts;
