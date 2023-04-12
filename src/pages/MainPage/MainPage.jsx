import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';
import { Modal } from 'components/Modal/Modal';


export const MainPage = () => {
  return (
    <div className="container">
      <h1>main page</h1>

      <DailyCaloriesForm />
      <Modal/>
    </div>
  );
};
