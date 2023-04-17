import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
import style from './MenuDiary.module.scss';
import { TbArrowBack } from 'react-icons/tb';

export const MenuDiary = memo(({ onClick }) => {
  return (
    <>
      <div className={style.modal}>
        <div className={style.list}>
          <button className={style.btn} onClick={onClick}>
            <TbArrowBack />
          </button>
          <DiaryAddProductForm />
        </div>
      </div>
    </>
  );
});

MenuDiary.propTypes = {
  onClick: PropTypes.func.isRequired,
};
