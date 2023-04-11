import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <>
      <div className={styles.mainPage}>
        <DailyCaloriesForm />
      </div>
    </>
  );
};
