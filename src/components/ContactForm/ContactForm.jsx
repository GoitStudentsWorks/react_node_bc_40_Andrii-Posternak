import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { TextField, Box, Container, Button } from '@mui/material';
import Notify from 'helpers/notifiOptions';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/contacts/contactsOperations';
import { contactSchema } from 'schemas';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },

    validationSchema: contactSchema,

    onSubmit: values => {
      const isContactExist = contacts.find(
        contact =>
          contact.name.toLowerCase() === values.name.trim().toLowerCase()
      );
      if (isContactExist) {
        Notify.failure(`"${values.name}" is already in contacts`);
      } else {
        dispatch(addContact(values));
        formik.resetForm();
        Notify.success(`Contact "${values.name}" successfully created`);
      }
    },
  });

  return (
    <Container component="div" maxWidth="xs">
      <Box
        sx={{
          marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box component="form" sx={{ mt: 1 }} onSubmit={formik.handleSubmit}>
          <TextField
            margin="normal"
            fullWidth
            id="name"
            label="Name *"
            name="name"
            value={formik.values.name}
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
            value={formik.values.number}
            onChange={formik.handleChange}
            error={formik.touched.number && Boolean(formik.errors.number)}
            helperText={formik.touched.number && formik.errors.number}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add contact
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
