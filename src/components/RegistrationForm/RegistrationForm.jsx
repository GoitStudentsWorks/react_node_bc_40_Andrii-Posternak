import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Notiflix from 'notiflix';

import { Button } from 'components/Button/Button';
import styles from './RegistrationForm.module.scss';
import { routes } from 'utils/routes';
import { registerSchema } from 'helpers/validation';
import { registerUserApi } from 'services/authApi';

export const RegistrationForm = () => {
  const navigate = useNavigate();

  const { handleSubmit, errors, handleChange, values, submitCount } = useFormik(
    {
      initialValues: {
        name: '',
        email: '',
        password: '',
      },
      onSubmit: async (values, { setFieldError }) => {
        try {
          await registerUserApi(values);
          navigate(routes.login, { replace: true });
          Notiflix.Notify.success('Registration has been successful');
        } catch (error) {
          const serverResponse = error.response.data;
          setFieldError('email', 'Email already exists');
          Notiflix.Notify.failure(`${serverResponse.message}. Try again`);
        }
      },
      validationSchema: registerSchema,
    }
  );

  return (
    <>
      <p className={styles.heading}>Register</p>
      <form onSubmit={handleSubmit}>
        <div className={styles.formWrapper}>
          <label className={styles.label}>
            <span className={styles.text}>Name</span>
            <input
              type="text"
              name="name"
              className={styles.input}
              onChange={handleChange}
              value={values.name}
            />
            {submitCount > 0 && errors.name && (
              <span className={styles.error}>{errors.name}</span>
            )}
          </label>
          <label className={styles.label}>
            <span className={styles.text}>Email</span>
            <input
              type="email"
              name="email"
              className={styles.input}
              onChange={handleChange}
              value={values.email}
            />
            {submitCount > 0 && errors.email && (
              <span className={styles.error}>{errors.email}</span>
            )}
          </label>
          <label className={styles.label}>
            <span className={styles.text}>Password</span>
            <input
              type="password"
              name="password"
              className={styles.input}
              onChange={handleChange}
              value={values.password}
            />
            {submitCount > 0 && errors.password && (
              <span className={styles.error}>{errors.password}</span>
            )}
          </label>
        </div>

        <div className={styles.buttonWrapper}>
          <Button type="submit" mainStyle="active">
            Register
          </Button>
          <Button
            type="button"
            mainStyle="primary"
            handleClick={e => {
              e.preventDefault();
              navigate(routes.login, { replace: true });
            }}
          >
            Log in
          </Button>
        </div>
      </form>
    </>
  );
};
