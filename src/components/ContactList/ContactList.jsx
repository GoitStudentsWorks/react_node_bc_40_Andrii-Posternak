import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';
import { selectFilteredContact } from 'redux/selectors';
import { UpdateForm } from 'components/UpdateForm/UpdateForm';
import {
  List,
  ContactItem,
  ContainerList,
  NameWrap,
  Number,
  BtnWrap,
  DeleteBtn,
  UpdateBtn,
  Avatar,
} from 'components/ContactList/ContactList.styled';
import { ConfirmModal } from 'components/ConfirmModal/ConfirmModal';

export const ContactList = () => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [contact, setContact] = useState({});

  const [isDelete, setIsDelete] = useState(false);

  const filteredContact = useSelector(selectFilteredContact);

  const changeContact = oldContact => {
    setIsUpdate(true);
    setContact(oldContact);
  };

  const removeContact = contact => {
    setIsDelete(true);
    setContact(contact);
  };

  return (
    <ContainerList>
      <Loader />
      {isUpdate && <UpdateForm setIsUpdate={setIsUpdate} contact={contact} />}
      {isDelete && <ConfirmModal setIsDelete={setIsDelete} contact={contact} />}
      <List>
        {[...filteredContact]
          .sort((previousName, nextName) =>
            previousName.name.localeCompare(nextName.name)
          )
          .map(({ id, name, number }) => (
            <ContactItem key={id}>
              <NameWrap>
                <Avatar aria-label="avatar" />
                <p>{name}:</p>
              </NameWrap>
              <Number href="tel: {number}">{number}</Number>
              <BtnWrap>
                <UpdateBtn
                  aria-label="edit"
                  onClick={() => changeContact({ id, name, number })}
                />
                <DeleteBtn
                  aria-label="delete"
                  onClick={() => removeContact({ id, name, number })}
                />
              </BtnWrap>
            </ContactItem>
          ))}
      </List>
    </ContainerList>
  );
};
