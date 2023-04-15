import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
import svg from '../../assets/images/svg/Vector 9.svg';
import style from './MenuDiary.module.scss';

export const MenuDiary = memo(({ onClick }) => {
  return (
    <div className="container">
      <div className={style.modal}>
        <div className={style.list}>
          <button className={style.btn} onClick={onClick}>
            <img src={svg} alt="arrow" />
          </button>
          <DiaryAddProductForm />
        </div>
      </div>
    </div>
  );
});

MenuDiary.propTypes = {
  onClick: PropTypes.func.isRequired,
};
