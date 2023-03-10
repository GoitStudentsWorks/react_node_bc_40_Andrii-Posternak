import { useSelector } from 'react-redux';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { selectToken } from 'redux/auth/authSelectors';
import { AppBar, Toolbar } from '@mui/material';
import logo from 'images/logo.png';
import { Logo } from './Header.styled';

export const Header = () => {
  const isAuth = useSelector(selectToken);

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Logo href="/phonebook">
          <img src={logo} alt="phonebook" />
          Phonebook
        </Logo>
        {!isAuth ? <AuthNav /> : <UserMenu />}
      </Toolbar>
    </AppBar>
  );
};
