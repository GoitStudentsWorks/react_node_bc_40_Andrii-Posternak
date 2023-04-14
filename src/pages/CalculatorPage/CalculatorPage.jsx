import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';
import scss from './CalculatorPage.module.scss';

export const CalculatorPage = () => {
  return (
    <div className="container">
      <div className={scss.calculatorPage}>
        <DailyCaloriesForm />
      </div>
      <RightSideBar />
    </div>
  );
};
