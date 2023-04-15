import { useSelector } from 'react-redux';
import {
  selectCalorieNorm,
  selectNotRecFood,
} from 'redux/dailyCalorie/dailyCalorieSlice';
import {
  selectCurrentDate,
  selectEatenProducts,
} from 'redux/dailyFood/dailyFoodSlice';
import styles from './RightSideBar.module.scss';

export const RightSideBar = () => {
  const notRecFood = useSelector(selectNotRecFood);
  const calorieNorm = useSelector(selectCalorieNorm);
  const currentDate = useSelector(selectCurrentDate);
  const eatenProducts = useSelector(selectEatenProducts);

  const consumed = eatenProducts.reduce((acc, item) => {
    acc += item.calories;
    return Math.round(acc);
  }, 0);
  const left = calorieNorm - consumed;
  const interest = Math.round((consumed / calorieNorm) * 100);

  return (
    <>
      <div className={styles.blockWrapper}>
        <div>
          <h2 className={styles.heading}>Summary for {currentDate}</h2>
          <ul className={styles.list}>
            <li className={styles.calorieItem}>
              <span>Left</span>
              <span>{left > 0 ? left : '000'} kcal </span>
            </li>
            <li className={styles.calorieItem}>
              <span>Consumed</span>
              <span
                className={
                  consumed > calorieNorm ? styles.warning : styles.norm
                }
              >
                {consumed ? consumed : '000'} kcal
              </span>
            </li>
            <li className={styles.calorieItem}>
              <span>Daily rate</span>
              <span>{calorieNorm ? calorieNorm : '000'} kcal</span>
            </li>
            <li className={styles.calorieItem}>
              <span>n% of normal</span>
              <span>{interest ? interest : '000'} %</span>
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
