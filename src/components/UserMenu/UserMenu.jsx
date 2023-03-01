import { useDispatch, useSelector } from 'react-redux';
import { ButtonAuth } from 'components/AuthNav/AuthNav.styled';
import { logoutUser } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';
import { Wrap } from 'components/UserMenu/UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userAuth = useSelector(selectUser);

  const handleLoguot = () => {
    dispatch(logoutUser());
  };

  return (
    <Wrap>
      <p>{userAuth?.email}</p>
      <ButtonAuth onClick={handleLoguot}>Logout</ButtonAuth>
    </Wrap>
  );
};
