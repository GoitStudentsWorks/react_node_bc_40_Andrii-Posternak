import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'components/Button/Button';
import styles from './LoginForm.module.scss';
import { routes } from 'utils/routes';
import { loginSchema } from 'helpers/validation';
import { loginUser } from 'redux/auth/authOperations';
import { Loader } from 'components/Loader/Loader';
import { clearError } from 'redux/auth/authSlice';

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.auth.isLoading);

  const { handleSubmit, errors, handleChange, values, submitCount } = useFormik(
    {
      initialValues: {
        email: '',
        password: '',
      },
      onSubmit: values => {
        dispatch(clearError());
        dispatch(loginUser(values));
      },
      validationSchema: loginSchema,
    }
  );

  return (
    <>
      <p className={styles.heading}>Log in</p>
      {isLoading && <Loader />}
      <form onSubmit={handleSubmit} className={styles.caloriesForm}>
        <div className={styles.formWrapper}>
          <label className={styles.labelText}>
            <span className={styles.text}>Email</span>
            <div className={styles.formContainerMain}>
              <div className={styles.formContainerLeft}>
                <div className={styles.labelContainer}>
                  <input
                    type="email"
                    name="email"
                    className={styles.input}
                    onChange={handleChange}
                    value={values.email}
                  />
                </div>
              </div>
            </div>
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
          <Button
            type="submit"
            mainStyle="active"
            // handleClick={e => {
            //   e.preventDefault();
            //   console.log('login');
            // }}
          >
            Log in
          </Button>
          <Button
            type="button"
            mainStyle="primary"
            handleClick={e => {
              e.preventDefault();
              navigate(routes.register, { replace: true });
            }}
          >
            Register
          </Button>
        </div>
      </form>
    </>
  );
};
