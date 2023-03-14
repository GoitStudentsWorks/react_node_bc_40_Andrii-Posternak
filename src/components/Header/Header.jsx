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
    <AppBar position="static" style={{ minWidth: '420px' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Logo href="/phonebook">
          <img src={logo} alt="phonebook" width="24" />
          Phonebook
        </Logo>
        {!isAuth ? <AuthNav /> : <UserMenu />}
      </Toolbar>
    </AppBar>
  );
};
