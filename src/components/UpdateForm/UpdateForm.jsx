import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Notify from 'helpers/notifiOptions';
import { updateContact } from 'redux/contacts/contactsOperations';
import { contactSchema } from 'schemas';
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

  const formik = useFormik({
    initialValues: {
      name: contact.name,
      number: contact.number,
    },

    validationSchema: contactSchema,

    onSubmit: values => {
      dispatch(
        updateContact({
          id: contact.id,
          ...values,
        })
      );
      closeForm();
      Notify.success(`Contact "${values.name}" updated successfully`);
    },
  });

  return (
    <Backdrop>
      <Form onSubmit={formik.handleSubmit}>
        <TextField
          margin="normal"
          fullWidth
          autoFocus
          id="name"
          label="Name *"
          name="name"
          defaultValue={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          margin="normal"
          fullWidth
          id="number"
          label="Number *"
          name="number"
          defaultValue={formik.values.number}
          onChange={formik.handleChange}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
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
