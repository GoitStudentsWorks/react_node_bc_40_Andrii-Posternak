import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { selectFilteredContact } from 'redux/selectors';
import { UpdateForm } from 'components/UpdateForm/UpdateForm';
import {
  List,
  ContactItem,
  Button,
  ContainerList,
  ContactContent,
} from 'components/ContactList/ContactList.styled';

export const ContactList = () => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [contact, setContact] = useState({});

  const dispatch = useDispatch();
  const filteredContact = useSelector(selectFilteredContact);

  const changeContact = oldContact => {
    setIsUpdate(true);
    setContact(oldContact);
  };

  return (
    <ContainerList>
      <Loader />
      {isUpdate && <UpdateForm setIsUpdate={setIsUpdate} contact={contact} />}
      <List>
        {filteredContact.map(({ id, name, number }) => (
          <ContactItem key={id}>
            <ContactContent>
              {name}: {number}
              <div>
                <Button
                  type="button"
                  onClick={() => changeContact({ id, name, number })}
                >
                  Update
                </Button>
                <Button
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  Delete
                </Button>
              </div>
            </ContactContent>
          </ContactItem>
        ))}
      </List>
    </ContainerList>
  );
};
