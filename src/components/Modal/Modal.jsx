import scss from './Modal.module.scss';
import { Button } from 'components/Button/Button';
import { GrClose } from 'react-icons/gr';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { createPortal } from 'react-dom';
// import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useWindowSize } from 'react-use';
import { useSelector } from 'react-redux';
import {
  selectCalorieNorm,
  selectIsLoadingCalorie,
  selectNotRecFood,
} from 'redux/dailyCalorie/dailyCalorieSlice';
import { Loader } from 'components/Loader/Loader';
const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, isModalOpen }) => {
  const calorieNorm = useSelector(selectCalorieNorm);
  const notRecFood = useSelector(selectNotRecFood);
  const isLoading = useSelector(selectIsLoadingCalorie);

  // console.log('calorieNorm :', calorieNorm);
  // console.log('notRecFood :', notRecFood);
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
        {/* {error && <p> Oops, some error occured... Message: {error}</p>} */}
        {/* {isLoading === 'pending' ? (
          <Loader />
        ) : ( */}
        <div className={scss.modal}>
          {width < 768 ? (
            <div className={scss.btnContainer}>
              <BsArrowReturnLeft
                className={scss.icon}
                onClick={() => onClose()}
              />
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
                    {/* 2000 */}
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
                </div>
              </div>
              <div className={scss.btnWrap}>
                <Button size={'large'} mainStyle={'active'} type={'button'}>
                  {/* Replace */}
                  Start losing weight
                </Button>
              </div>
            </>
          )}
        </div>
        {/* )} */}
      </div>
    </>,
    modalRoot
  );
};
