import { DiaryDateCalendar } from 'components/DiaryDateCalendar/DiaryDateCalendar';
import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
import { DiaryProductsList } from 'components/DiaryProductsList/DiaryProductsList';

export const DiaryPage = () => {
  return (
    <>
      <DiaryDateCalendar />
      <DiaryAddProductForm />
      <DiaryProductsList />
    </>
  );
};
