import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { updateContact } from 'redux/contacts/contactsOperations';
import {
  Backdrop,
  Form,
  ButtonContainer,
  Button,
  ConfirmBtn,
  CancelBtn,
} from 'components/UpdateForm/UpdateForm.styled';

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
        <TextField
          margin="normal"
          fullWidth
          required
          autoFocus
          id="name"
          label="Name"
          name="name"
          defaultValue={contact.name}
        />
        <TextField
          margin="normal"
          fullWidth
          required
          id="number"
          label="Number"
          name="number"
          defaultValue={contact.number}
        />
        <ButtonContainer>
          <Button type="submit">
            <ConfirmBtn aria-label="confirm" />
          </Button>
          <CancelBtn aria-label="cancel" onClick={closeForm} />
        </ButtonContainer>
      </Form>
    </Backdrop>
  );
};

UpdateForm.propTypes = {
  setIsUpdate: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired,
};
