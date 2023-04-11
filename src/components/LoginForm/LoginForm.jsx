import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  return (
    <>
      <p className={styles.heading}>Log in</p>
      <form className={styles.formWrapper}>
        <label className={styles.label}>
          <span className={styles.text}>Email</span>
          <input type="email" className={styles.input} />
        </label>
        <label className={styles.label}>
          <span className={styles.text}>Password</span>
          <input type="password" className={styles.input} />
        </label>
      </form>
    </>
  );
};
