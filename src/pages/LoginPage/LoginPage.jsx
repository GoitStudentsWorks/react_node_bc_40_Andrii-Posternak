import { LoginForm } from 'components/LoginForm/LoginForm';
import styles from './LoginPage.module.scss';

export const LoginPage = () => {
  return (
    <div className="container">
      <div className={styles.formWrapper}>
        <LoginForm />
      </div>
    </div>
  );
};
