import { routes } from 'utils/routes';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ component }) => {
  const isAuth = useSelector(state => state.auth.isAuthStatus);

  return !isAuth ? component : <Navigate to={routes.home} />;
};
