import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEatenProduct } from 'redux/dailyFood/dailyFoodOperations';
import { nanoid } from 'nanoid';
import { DiaryProductsListItem } from 'components/DiaryProductsListItem/DiaryProductsListItem';
import s from './DiaryProductsList.module.scss';

export const DiaryProductsList = () => {
  const dispatch = useDispatch();
  const eatenProducts = useSelector(state => state.dailyFood.eatenProducts);

  const handleDeleteProduct = id => {
    dispatch(deleteEatenProduct(id));
  };

  return (
    <div>
      {eatenProducts?.length > 0 ? (
        <ul className={s.filteredList}>
          {[...eatenProducts]
            .sort((a, b) => b.date.localeCompare(a.date))
            .map(product => (
              <DiaryProductsListItem
                key={nanoid()}
                product={product}
                handleDeleteProduct={handleDeleteProduct}
              />
            ))}
        </ul>
      ) : (
        <p className={s.notification}>
          You have no products yet. Please add something.
        </p>
      )}
    </div>
  );
};
