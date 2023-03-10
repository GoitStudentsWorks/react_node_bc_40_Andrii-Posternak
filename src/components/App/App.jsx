import { useEffect, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { getCurrentUser } from 'redux/auth/authOperations';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { routes } from 'constants/routes';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute/PublicRoute';

const Home = lazy(() =>
  import('pages/Home/Home').then(module => ({ default: module.Home }))
);
const Contacts = lazy(() =>
  import('pages/Contacts/Contacts').then(module => ({
    default: module.Contacts,
  }))
);
const Login = lazy(() =>
  import('pages/Login/Login').then(module => ({ default: module.Login }))
);
const Register = lazy(() =>
  import('pages/Register/Register').then(module => ({
    default: module.Register,
  }))
);

export const App = () => {
  const isAuth = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path={routes.home} element={<SharedLayout />}>
        {isAuth ? (
          <Route index element={<Navigate to={routes.contacts} />} />
        ) : (
          <Route index element={<Home />} />
        )}
        <Route
          path={routes.register}
          element={<PublicRoute component={<Register />} />}
        />
        <Route
          path={routes.login}
          element={<PublicRoute component={<Login />} />}
        />
        <Route
          path={routes.contacts}
          element={<PrivateRoute component={<Contacts />} />}
        />
        <Route path="*" element={<Navigate to={routes.home} />} />
      </Route>
    </Routes>
  );
};
