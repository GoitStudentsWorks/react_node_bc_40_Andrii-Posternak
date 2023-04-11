import { useNavigate } from 'react-router-dom';

import { Button } from 'components/Button/Button';
import styles from './LoginForm.module.scss';
import { routes } from 'utils/routes';

export const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <>
      <p className={styles.heading}>Log in</p>
      <form>
        <div className={styles.formWrapper}>
          <label className={styles.label}>
            <span className={styles.text}>Email</span>
            <input type="email" className={styles.input} />
          </label>
          <label className={styles.label}>
            <span className={styles.text}>Password</span>
            <input type="password" className={styles.input} />
          </label>
        </div>
        <div className={styles.buttonWrapper}>
          <Button
            type="submit"
            mainStyle="active"
            handleClick={e => {
              e.preventDefault();
              console.log('login');
            }}
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
