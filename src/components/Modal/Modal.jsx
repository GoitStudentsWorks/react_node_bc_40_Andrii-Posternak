import scss from './Modal.module.scss';
import { Button } from 'components/Button/Button';
import { GrClose } from 'react-icons/gr';
import { createPortal } from 'react-dom';

import { useEffect } from 'react';
import { useWindowSize } from 'react-use';
import { useSelector } from 'react-redux';
import {
  selectCalorieNorm,
  selectIsLoadingCalorie,
  selectNotRecFood,
} from 'redux/dailyCalorie/dailyCalorieSlice';
import { Loader } from 'components/Loader/Loader';
import { routes } from 'utils/routes';
import { NavLink } from 'react-router-dom';
import { TbArrowBack } from 'react-icons/tb';
const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, isModalOpen }) => {
  const calorieNorm = useSelector(selectCalorieNorm);
  const notRecFood = useSelector(selectNotRecFood);
  const isLoading = useSelector(selectIsLoadingCalorie);

  const { width } = useWindowSize();

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    const onModalClose = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onModalClose);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', onModalClose);
    };
  }, [onClose]);

  return createPortal(
    <>
      <div className={scss.overlay} onClick={handleBackdropClick}>
        <div className={scss.modal}>
          {width < 768 ? (
            <div className={scss.btnContainer}>
              <TbArrowBack className={scss.icon} onClick={() => onClose()} />
            </div>
          ) : (
            <GrClose className={scss.closeIcon} onClick={() => onClose()} />
          )}
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <div className={scss.modalContainer}>
                <h2 className={scss.title}>
                  Your recommended daily calorie intake is
                </h2>
                <div className={scss.caloriesContainer}>
                  <span className={scss.calories}>
                    {calorieNorm}

                    <span className={scss.caloriesText}> ккал</span>
                  </span>
                </div>
                <div className={scss.listCenter}>
                  <h2 className={scss.secondaryTitle}>
                    Foods you should not eat
                  </h2>
                  <ul className={scss.list}>
                    {notRecFood.length > 0 &&
                      notRecFood.map((el, i) => (
                        <li className={scss.listItem} key={i}>
                          {i + 1}. {el.en}
                        </li>
                      ))}
                  </ul>
                  <div className={scss.btnWrap}>
                    <NavLink to={routes.login}>
                      <Button
                        size={'large'}
                        mainStyle={'active'}
                        type={'button'}
                      >
                        {/* Replace */}
                        Start losing weight
                      </Button>
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className={scss.btnWrap}>
                <NavLink to={routes.login}>
                  <Button size={'large'} mainStyle={'active'} type={'button'}>
                    Start losing weight
                  </Button>
                </NavLink>
              </div>
            </>
          )}
        </div>
      </div>
    </>,
    modalRoot
  );
};
