import { useSelector } from 'react-redux';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { selectToken } from 'redux/auth/authSelectors';
import { AppBar, Toolbar, Typography } from '@mui/material';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import logo from 'images/logo.png';

export const Header = () => {
  const isAuth = useSelector(selectToken);

  return (
    <AppBar position="static">
      <Toolbar>
        {/* <ContactPhoneOutlinedIcon aria-label="logo" /> */}
        <img src={logo} alt="phonebook" />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, marginLeft: '10px' }}
        >
          Phonebook
        </Typography>
        {!isAuth ? <AuthNav /> : <UserMenu />}
      </Toolbar>
    </AppBar>
  );
};
