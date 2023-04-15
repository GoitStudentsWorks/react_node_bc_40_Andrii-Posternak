import { useEffect, useState } from 'react';
import { useMedia, useWindowSize } from 'react-use';
import { useDispatch } from 'react-redux';
import { getEatenProducts } from 'redux/dailyFood/dailyFoodOperations';
import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
import { DiaryDateCalendar } from 'components/DiaryDateCalendar/DiaryDateCalendar';
import { DiaryProductsList } from 'components/DiaryProductsList/DiaryProductsList';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';
import scss from './DiaryPage.module.scss';
import styles from '../CalculatorPage/CalculatorPage.module.scss';
import { MenuDiary } from 'components/MenuDiary/MenuDiary';

export const DiaryPage = () => {
  const { width } = useWindowSize();
  const dispatch = useDispatch();
  const isMobile = useMedia('(max-width: 767px)');

  useEffect(() => {
    dispatch(getEatenProducts(new Date().toDateString()));
  }, [dispatch]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isToggle = () => {
    setIsMenuOpen(state => !state);
  };

  return (
    <>
      <div className="container">
        <div className={scss.container}>
          <DiaryDateCalendar />
          {width > 768 ? <DiaryAddProductForm /> : ''}
          <DiaryProductsList />
        </div>
        <div className={scss.wrapperBtn}>
          {isMobile && (
            <button className={scss.btn} type="button" onClick={isToggle}>
              +
            </button>
          )}
        </div>
        <div className={styles.SidebarSection}>
          <div className={styles.SidebarWrap}>
            <RightSideBar />
          </div>
        </div>
      </div>
      {isMenuOpen && <MenuDiary onClick={isToggle} />}
    </>
  );
};
