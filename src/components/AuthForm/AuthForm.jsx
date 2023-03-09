import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export const AuthForm = ({ authType, btnTitle, onSubmit }) => {
  const [form, setForm] = useState(
    authType === 'login'
      ? { email: '', password: '' }
      : { email: '', password: '', name: '' }
  );

  const { name, email, password } = form;

  const handleChange = event => {
    const { name, value } = event.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(form);
    setForm({ email: '', password: '', name: '' });
  };

  return (
    <Container component="div" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#1976d2' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {btnTitle}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {authType === 'register' && (
            <TextField
              margin="normal"
              fullWidth
              required
              id="name"
              label="Name"
              name="name"
              value={name}
              onChange={handleChange}
            />
          )}
          <TextField
            margin="normal"
            fullWidth
            required
            id="email"
            label="Email Address"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            fullWidth
            required
            type="password"
            id="password"
            label="Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {btnTitle}
          </Button>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              {btnTitle === 'Login' ? (
                <Link href="/phonebook/register" variant="body2">
                  Don't have an account? Register
                </Link>
              ) : (
                <Link href="/phonebook/login" variant="body2">
                  Already have an account? Login
                </Link>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

AuthForm.propTypes = {
  authType: PropTypes.string.isRequired,
  btnTitle: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
