import PropTypes from 'prop-types';
import { useFormik } from 'formik';

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
import { registerSchema, loginSchema } from 'schemas';

export const AuthForm = ({ authType, btnTitle, onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    validationSchema: authType === 'login' ? loginSchema : registerSchema,

    onSubmit: values => {
      onSubmit(values);
    },
  });

  return (
    <Container component="div" maxWidth="xs" style={{ minWidth: '420px' }}>
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
        <Box component="form" sx={{ mt: 1 }} onSubmit={formik.handleSubmit}>
          {authType === 'register' && (
            <TextField
              margin="normal"
              fullWidth
              type="text"
              id="name"
              label="Name *"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          )}
          <TextField
            margin="normal"
            fullWidth
            type="email"
            id="email"
            label="Email *"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            margin="normal"
            fullWidth
            type="password"
            id="password"
            label="Password *"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
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
