import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import PropTypes from 'prop-types';
import {
  Backdrop,
  Form,
  ButtonContainer,
  Button,
  ConfirmBtn,
  CancelBtn,
  WarningIcon,
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
  };

  return (
    <Backdrop>
      <Form onSubmit={onSubmitForm}>
        <WarningIcon aria-label="warning" />
        <p>
          Are you sure you want to delete the contact <br /> "{contact.name}"?
        </p>
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
