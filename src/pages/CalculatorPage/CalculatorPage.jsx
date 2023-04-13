import scss from './CalculatorPage.module.scss';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';

export const CalculatorPage = () => {
  return (
    <div className={scss.calculatorPage}>
      <DailyCaloriesForm />
      <RightSideBar />
    </div>
  );
};
