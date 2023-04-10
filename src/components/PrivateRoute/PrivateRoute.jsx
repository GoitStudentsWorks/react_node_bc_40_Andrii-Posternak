import { routes } from 'utils/routes';
// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { selectToken } from 'redux/auth/authSelectors';

export const PrivateRoute = ({ component }) => {
  // const isAuth = useSelector(selectToken);
  const isAuth = true;

  return isAuth ? component : <Navigate to={routes.login} />;
};
