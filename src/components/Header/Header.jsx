import { Logo } from 'components/Logo/Logo';
import { UserInfo } from 'components/UserInfo/UserInfo';
import { Navigation } from 'components/Navigation/Navigation';
import style from './Header.module.scss';
import { useMedia } from 'react-use';

export const Header = () => {
  const isAuth = true;
  const isTablet = useMedia('(max-width: 1279px)');

  return (
    <header className={isTablet && style.header}>
      <div className="container">
        <div className={style.inner}>
          <Logo />
          <Navigation />
        </div>
        {isAuth && <UserInfo />}
      </div>
    </header>
  );
};
