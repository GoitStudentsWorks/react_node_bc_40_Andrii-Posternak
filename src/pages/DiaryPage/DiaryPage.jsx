import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
import { DiaryDateCalendar } from 'components/DiaryDateCalendar/DiaryDateCalendar';
import { DiaryProductsList } from 'components/DiaryProductsList/DiaryProductsList';
import scss from './DiaryPage.module.scss';
import { useWindowSize } from 'react-use';

export const DiaryPage = () => {
  const { width } = useWindowSize();
  return (
    <div className={scss.container}>
      <DiaryDateCalendar />

      {width > 768 ? <DiaryAddProductForm /> : ''}

      <DiaryProductsList />
    </div>
  );
};
