import styles from './RightSideBar.module.scss';

export const RightSideBar = () => {
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
              <span>000 kcal</span>
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
            <li>
              <span>Milk</span>
            </li>
            <li>
              <span>Milk</span>
            </li>
            <li>
              <span>Milk</span>
            </li>
            <li>
              <span>Milk</span>
            </li>
            <li>
              <span>Milk</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
