import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { selecError } from 'redux/selectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectIsAuth } from 'redux/auth/authSelectors';
import { ContainerContacts } from 'pages/Contacts/Contacts.styled';

export const Contacts = () => {
  const dispatch = useDispatch();
  const error = useSelector(selecError);
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    if (isAuth) dispatch(fetchContacts());
  }, [dispatch, isAuth]);

  if (error) return <p>Download error</p>;

  return (
    <ContainerContacts>
      <ContactForm />
      <Filter />
      <ContactList />
    </ContainerContacts>
  );
};
