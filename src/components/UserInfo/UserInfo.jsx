import { NavLink } from 'react-router-dom';
import style from './UserInfo.module.scss';
import { routes } from 'utils/routes';
import { useMedia } from 'react-use';

export const UserInfo = () => {
  const isMobile = useMedia('(max-width: 767px)');

  return (
    <div className={isMobile ? style.container : null}>
      <div className={style.wrapper}>
        <p className={style.active}>user</p>
        <div className={style.line}></div>
        <div>
          <NavLink
            to={routes.register}
            className={style.default}
            // onClick={}
          >
            Exit
          </NavLink>
        </div>
      </div>
    </div>
  );
};
