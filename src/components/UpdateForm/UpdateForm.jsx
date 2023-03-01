import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/contactsOperations';
import {
  Backdrop,
  Form,
  Label,
  Input,
  ButtonContainer,
} from 'components/UpdateForm/UpdateForm.styled';
import { Button } from 'components/Button/Button.styled';

export const UpdateForm = ({ setIsUpdate, contact }) => {
  const dispatch = useDispatch();

  const closeForm = () => {
    setIsUpdate(false);
  };

  const onSubmitForm = event => {
    event.preventDefault();
    dispatch(
      updateContact({
        id: contact.id,
        name: event.target.name.value,
        number: event.target.number.value,
      })
    );
    closeForm();
  };

  return (
    <Backdrop>
      <Form onSubmit={onSubmitForm}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            defaultValue={contact.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            defaultValue={contact.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <ButtonContainer>
          <Button type="submit">Update</Button>
          <Button type="button" onClick={closeForm}>
            Cancel
          </Button>
        </ButtonContainer>
      </Form>
    </Backdrop>
  );
};
