import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEatenProducts } from 'redux/dailyFood/dailyFoodOperations';
import { selectCurrentDate } from 'redux/dailyFood/dailyFoodSlice';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';
import styles from './CalculatorPage.module.scss';

export const CalculatorPage = () => {
  const dispatch = useDispatch();
  const currentDate = useSelector(selectCurrentDate);

  useEffect(() => {
    dispatch(getEatenProducts(currentDate));
  }, [dispatch, currentDate]);

  return (
    <>
      <div className="container">
        <div className={styles.calculatorPage}>
          <DailyCaloriesForm />
        </div>
      </div>
      <div className={styles.SidebarSection}>
        <div className={styles.SidebarWrap}>
          <RightSideBar />
        </div>
      </div>
    </>
  );
};
