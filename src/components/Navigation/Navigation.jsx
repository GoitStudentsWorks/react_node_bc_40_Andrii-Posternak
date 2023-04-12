import { NavLink } from 'react-router-dom';
import { useMedia } from 'react-use';
import { routes } from 'utils/routes';
import { RxHamburgerMenu } from 'react-icons/rx';
import style from './Navigation.module.scss';
import { MenuModal } from 'components/MenuModal/MenuModal';
import { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
// import { useSelector } from 'react-redux';

const getActive = ({ isActive }) =>
  isActive ? `${style.active} ${style.link}` : style.link;

export const Navigation = () => {
  // const isAuth = useSelector();
  const isTablet = useMedia('(max-width: 1279px)');
  const isAuth = true;

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const isToggle = () => {
    setIsBurgerMenuOpen(state => !state);
  };

  return (
    <nav className={style.nav}>
      {isAuth ? (
        isTablet ? (
          <button type="button" className={style.menu} onClick={isToggle}>
            {!isBurgerMenuOpen ? <RxHamburgerMenu /> : <RxCross1 />}
          </button>
        ) : (
          <>
            <ul>
              <li>
                <NavLink to={routes.diary} className={getActive}>
                  Diary
                </NavLink>
              </li>
              <li>
                <NavLink to={routes.calculator} className={getActive}>
                  Calculator
                </NavLink>
              </li>
            </ul>
          </>
        )
      ) : (
        <ul className={style.regList}>
          <li>
            <NavLink className={getActive} to={routes.login}>
              Log in
            </NavLink>
          </li>
          <li>
            <NavLink className={getActive} to={routes.register}>
              Registration
            </NavLink>
          </li>
        </ul>
      )}
      {isBurgerMenuOpen && (
        <MenuModal isActive={getActive} onClick={isToggle} />
      )}
    </nav>
  );
};
