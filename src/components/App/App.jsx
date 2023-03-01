import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from 'redux/auth/authOperations';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { routes } from 'constants/routes';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute/PublicRoute';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';
import { Contacts } from 'pages/Contacts/Contacts';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path={routes.home} element={<SharedLayout />}>
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
