import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Box, Container, Button } from '@mui/material';
import Notify from 'helpers/notifiOptions';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/contacts/contactsOperations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const onSubmitForm = event => {
    event.preventDefault();

    const isContactExist = contacts.find(
      contact => contact.name.toLowerCase() === name.trim().toLowerCase()
    );

    if (isContactExist) {
      Notify.failure(`"${name}" is already in contacts`);
      resetForm();
    } else {
      dispatch(addContact({ name, number }));
      resetForm();
      Notify.success(`Contact "${name}" successfully created`);
    }
  };

  const onChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log('nothing entered');
    }
  };

  return (
    <Container component="div" maxWidth="xs">
      <Box
        sx={{
          marginTop: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box component="form" onSubmit={onSubmitForm} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            required
            id="name"
            label="Name"
            name="name"
            value={name}
            onChange={onChange}
          />
          <TextField
            margin="normal"
            fullWidth
            required
            label="Number"
            name="number"
            id="number"
            value={number}
            onChange={onChange}
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
