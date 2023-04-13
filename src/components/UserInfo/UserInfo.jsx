import { NavLink } from 'react-router-dom';
import style from './UserInfo.module.scss';
import { routes } from 'utils/routes';
import { useMedia } from 'react-use';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperations';

export const UserInfo = () => {
  const isMobile = useMedia('(max-width: 767px)');
  const userName = useSelector(state => state.auth.user?.name);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={isMobile ? style.container : null}>
      <div className={style.wrapper}>
        <p className={style.active}>{userName}</p>
        <div className={style.line}></div>
        <div>
          <NavLink
            to={routes.register}
            className={style.default}
            onClick={logout}
          >
            Exit
          </NavLink>
        </div>
      </div>
    </div>
  );
};
