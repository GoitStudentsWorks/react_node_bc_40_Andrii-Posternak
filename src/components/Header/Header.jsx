import { Logo } from 'components/Logo/Logo';
import { UserInfo } from 'components/UserInfo/UserInfo';
import { Navigation } from 'components/Navigation/Navigation';

export const Header = () => {
  return (
    <>
      <Logo />
      <UserInfo />
      <Navigation />
    </>
  );
};
