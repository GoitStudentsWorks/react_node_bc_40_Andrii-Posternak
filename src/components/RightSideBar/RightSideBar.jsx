import { useSelector } from 'react-redux';
import styles from './RightSideBar.module.scss';
import {
  selectCalorieNorm,
  selectNotRecFood,
} from 'redux/dailyCalorie/dailyCalorieSlice';

export const RightSideBar = () => {
  const notRecFood = useSelector(selectNotRecFood);
  const calorieNorm = useSelector(selectCalorieNorm);

  return (
    <>
      <div className={styles.blockWrapper}>
        <div>
          <h2 className={styles.heading}>Summary for 20.06.2020</h2>
          <ul className={styles.list}>
            <li className={styles.calorieItem}>
              <span>Left</span>
              <span>000 kcal</span>
            </li>
            <li className={styles.calorieItem}>
              <span>Consumed</span>
              <span>000 kcal</span>
            </li>
            <li className={styles.calorieItem}>
              <span>Daily rate</span>
              <span>{calorieNorm ? calorieNorm : '000'} kcal</span>
            </li>
            <li className={styles.calorieItem}>
              <span>n% of normal</span>
              <span>000 kcal</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className={styles.heading}>Food not recommended</h2>
          <ul className={styles.foodList}>
            {notRecFood && notRecFood.length > 0 ? (
              notRecFood.map((el, i) => (
                <li key={i}>
                  <span>{el.en}</span>
                </li>
              ))
            ) : (
              <li>
                <span>Your diet will be displayed here</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
