import { routes } from 'constants/routes';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'redux/auth/authSelectors';

export const PublicRoute = ({ component }) => {
  const isAuth = useSelector(selectToken);

  return !isAuth ? component : <Navigate to={routes.contacts} />;
};
