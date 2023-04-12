import { UserInfo } from 'components/UserInfo/UserInfo';
import scss from './CalculatorPage.module.scss';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';

export const CalculatorPage = () => {
  return (
    <div className={scss.calculatorPage}>
      <div className={scss.btnContainer}>
        <UserInfo className={scss.navigation__list} />
      </div>
      <DailyCaloriesForm />
    </div>
  );
};
