import { useMedia } from 'react-use';
import { useSelector } from 'react-redux';
import { selectAuthStatus } from 'redux/auth/authSlice';
import { Logo } from 'components/Logo/Logo';
import { UserInfo } from 'components/UserInfo/UserInfo';
import { Navigation } from 'components/Navigation/Navigation';
import style from './Header.module.scss';

export const Header = () => {
  const isAuth = useSelector(selectAuthStatus);
  const isMobile = useMedia('(max-width: 767px)');
  const isTablet = useMedia('(min-width: 768px)');

  const getClass = !isAuth ? style.wrapperReg : style.wrapper;

  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.inner}>
          <Logo />
          <div className={getClass}>
            {isAuth && isTablet && <UserInfo />}
            <Navigation />
          </div>
        </div>
      </div>
      {isAuth && isMobile && (
        <div className={style.bgn}>
          <UserInfo />
        </div>
      )}
    </header>
  );
};
