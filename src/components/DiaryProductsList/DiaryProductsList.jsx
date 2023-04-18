import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEatenProduct } from 'redux/dailyFood/dailyFoodOperations';
import {
  selectCurrentDate,
  selectEatenProducts,
} from 'redux/dailyFood/dailyFoodSlice';
import { DiaryProductsListItem } from 'components/DiaryProductsListItem/DiaryProductsListItem';
import { showElem } from 'helpers/func';
import s from './DiaryProductsList.module.scss';

export const DiaryProductsList = () => {
  const dispatch = useDispatch();
  const eatenProducts = useSelector(selectEatenProducts);
  const currentDate = useSelector(selectCurrentDate);

  const handleDeleteProduct = id => {
    dispatch(deleteEatenProduct(id));
  };

  return (
    <>
      {eatenProducts?.length > 0 ? (
        <ul className={s.filteredList}>
          {[...eatenProducts]
            .sort((a, b) => b.date.localeCompare(a.date))
            .map(product => (
              <DiaryProductsListItem
                key={product._id}
                product={product}
                handleDeleteProduct={handleDeleteProduct}
              />
            ))}
        </ul>
      ) : (
        <>
          {showElem(currentDate) ? (
            <p className={s.notification}>
              You have no products yet. Please add something.
            </p>
          ) : (
            <p className={s.notification}>
              You do not have an added product on this day.
            </p>
          )}
        </>
      )}
    </>
  );
};
