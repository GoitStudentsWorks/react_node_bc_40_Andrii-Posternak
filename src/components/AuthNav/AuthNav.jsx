import { routes } from 'constants/routes';
import { AuthWrap, ButtonAuth } from 'components/AuthNav/AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthWrap>
      <ButtonAuth to={routes.login}>Login</ButtonAuth>
      <ButtonAuth to={routes.register}>Register</ButtonAuth>
    </AuthWrap>
  );
};
