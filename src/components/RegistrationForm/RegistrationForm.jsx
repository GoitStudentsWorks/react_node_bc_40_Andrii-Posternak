import styles from './RegistrationForm.module.scss';

export const RegistrationForm = () => {
  return (
    <>
      <p className={styles.heading}>Register</p>
      <form className={styles.formWrapper}>
        <label className={styles.label}>
          <span className={styles.text}>Name</span>
          <input type="text" className={styles.input} />
        </label>
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
