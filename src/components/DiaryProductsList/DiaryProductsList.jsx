import React from 'react';
import { DiaryProductsListItem } from 'components/DiaryProductsListItem/DiaryProductsListItem';
import { Loader } from 'components/Loader/Loader';

export const DiaryProductsList = () => {
  return (
    <div
    // className={s.listContainer}
    >
      <ul
      // className={s.filteredList}
      >
        {/* {isLoading === 'pending' ? (
          <Loader />
        ) : array?.length > 0 ? (
          array.map(item => ( */}
        <DiaryProductsListItem
        // key={item.id}
        // id={item.id}
        // weight={item.weight}
        // kcal={item.kcal}
        // title={item.title}
        // eatenProductId={item.id}
        // dayId={dayId}
        // deleteProduct={deleteProduct}
        />
        {/* ))
        ) : (
          <p className={s.notification}>
            You have no products yet. Please add something.
          </p>
        )} */}
      </ul>
    </div>
  );
};
