import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';
import styles from './CalculatorPage.module.scss';

export const CalculatorPage = () => {
  return (
    <div className="container">
      <div className={styles.calculatorPage}>
        <DailyCaloriesForm />
        <div className={styles.SidebarSection}>
          <div className={styles.SidebarWrap}>
            <RightSideBar />
          </div>
        </div>
      </div>
    </div>
  );
};
