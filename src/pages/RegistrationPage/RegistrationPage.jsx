import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.scss';

export const RegistrationPage = () => {
  return (
    <div className={styles.registerPage}>
      <div className="container">
        <div className={styles.formWrapper}>
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};
