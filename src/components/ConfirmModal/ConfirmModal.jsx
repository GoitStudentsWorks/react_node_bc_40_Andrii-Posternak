import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Notify from 'helpers/notifiOptions';
import { deleteContact } from 'redux/contacts/contactsOperations';
import {
  Backdrop,
  Form,
  ButtonContainer,
  Button,
  ConfirmBtn,
  CancelBtn,
  WarningIcon,
  WarningText,
} from 'components/ConfirmModal/ConfirmModal.styled';

export const ConfirmModal = ({ setIsDelete, contact }) => {
  const dispatch = useDispatch();

  const closeForm = () => {
    setIsDelete(false);
  };

  const onSubmitForm = event => {
    event.preventDefault();
    dispatch(deleteContact(contact.id));
    closeForm();
    Notify.success(`Contact "${contact.name}" deleted successfully`);
  };

  return (
    <Backdrop>
      <Form onSubmit={onSubmitForm}>
        <WarningIcon aria-label="warning" />
        <WarningText>
          Are you sure you want to delete the contact "{contact.name}"?
        </WarningText>
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

ConfirmModal.propTypes = {
  setIsDelete: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired,
};
