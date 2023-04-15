import { useEffect } from 'react';
import { useWindowSize } from 'react-use';
import { useDispatch, useSelector } from 'react-redux';
import { getEatenProducts } from 'redux/dailyFood/dailyFoodOperations';
import { selectCurrentDate } from 'redux/dailyFood/dailyFoodSlice';
import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
import { DiaryDateCalendar } from 'components/DiaryDateCalendar/DiaryDateCalendar';
import { DiaryProductsList } from 'components/DiaryProductsList/DiaryProductsList';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';
import scss from './DiaryPage.module.scss';
import styles from '../CalculatorPage/CalculatorPage.module.scss';

export const DiaryPage = () => {
  const { width } = useWindowSize();
  const dispatch = useDispatch();
  const currentDate = useSelector(selectCurrentDate);

  useEffect(() => {
    dispatch(getEatenProducts(currentDate));
  }, [dispatch, currentDate]);

  return (
    <div className="container">
      <div className={scss.container}>
        <DiaryDateCalendar />
        {width > 768 ? <DiaryAddProductForm /> : ''}
        <DiaryProductsList />
      </div>
      <div className={styles.SidebarSection}>
        <div className={styles.SidebarWrap}>
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};
