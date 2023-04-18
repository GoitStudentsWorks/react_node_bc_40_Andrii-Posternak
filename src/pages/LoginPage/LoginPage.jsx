import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Notiflix from 'notiflix';
import { LoginForm } from 'components/LoginForm/LoginForm';
import styles from './LoginPage.module.scss';

export const LoginPage = () => {
  const error = useSelector(state => state.auth.error);

  useEffect(() => {
    if (error && error !== "User doesn't exist") {
      Notiflix.Notify.failure(`Email or password is wrong. Try again`);
    }
  }, [error]);

  return (
    <div className={styles.loginPage}>
      <div className="container">
        <div className={styles.formWrapper}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
