import { useEffect } from 'react';
import { useWindowSize } from 'react-use';
import { useDispatch } from 'react-redux';
import { getEatenProducts } from 'redux/dailyFood/dailyFoodOperations';
import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
import { DiaryDateCalendar } from 'components/DiaryDateCalendar/DiaryDateCalendar';
import { DiaryProductsList } from 'components/DiaryProductsList/DiaryProductsList';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';
import scss from './DiaryPage.module.scss';
import styles from '../CalculatorPage/CalculatorPage.module.scss';

export const DiaryPage = () => {
  const { width } = useWindowSize();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEatenProducts(new Date().toDateString()));
  }, [dispatch]);

  return (
    <div className="container">
      <div className={scss.container}>
        <DiaryDateCalendar />
        {width > 768 ? <DiaryAddProductForm /> : ''}
        <DiaryProductsList />
        <div className={styles.SidebarSection}>
          <div className={styles.SidebarWrap}>
            <RightSideBar />
          </div>
        </div>
      </div>
    </div>
  );
};
