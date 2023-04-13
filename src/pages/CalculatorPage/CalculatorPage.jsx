import scss from './CalculatorPage.module.scss';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';

export const CalculatorPage = () => {
  return (
    <div className={scss.calculatorPage}>
      <DailyCaloriesForm />
    </div>
  );
};
