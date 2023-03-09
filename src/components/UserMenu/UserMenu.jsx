import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';
import { Loguot, Wrap } from 'components/UserMenu/UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userAuth = useSelector(selectUser);

  const handleLoguot = () => {
    dispatch(logoutUser());
  };

  return (
    <Wrap>
      <p>{userAuth?.name}</p>
      <Loguot aria-label="lolgout" onClick={handleLoguot} />
    </Wrap>
  );
};
