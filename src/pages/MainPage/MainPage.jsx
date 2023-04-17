import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';
import styles from './MainPage.module.scss';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';

export const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const onClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={styles.mainPage}>
      <div className="container">
      <DailyCaloriesForm handleModalOpen={handleModalOpen} />
      {isModalOpen && <Modal onClose={onClose} isModalOpen={isModalOpen} />}
    </div>
    </div>
  );
};
