import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
import { DiaryDateCalendar } from 'components/DiaryDateCalendar/DiaryDateCalendar';
import { DiaryProductsList } from 'components/DiaryProductsList/DiaryProductsList';
import scss from './DiaryPage.module.scss';

export const DiaryPage = () => {
  return (
    <div className={scss.container}>
      <DiaryDateCalendar />
      <DiaryAddProductForm />
      <DiaryProductsList />
    </div>
  );
};
