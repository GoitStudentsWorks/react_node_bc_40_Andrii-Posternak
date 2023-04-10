import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { getCurrentUser } from 'redux/auth/authOperations';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { routes } from 'utils/routes';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute/PublicRoute';

const MainPage = lazy(() =>
  import('pages/MainPage/MainPage').then(module => ({
    default: module.MainPage,
  }))
);
const DiaryPage = lazy(() =>
  import('pages/DiaryPage/DiaryPage').then(module => ({
    default: module.DiaryPage,
  }))
);
const CalculatorPage = lazy(() =>
  import('pages/CalculatorPage/CalculatorPage').then(module => ({
    default: module.CalculatorPage,
  }))
);

const LoginPage = lazy(() =>
  import('pages/LoginPage/LoginPage').then(module => ({
    default: module.LoginPage,
  }))
);
const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage').then(module => ({
    default: module.RegistrationPage,
  }))
);

export const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCurrentUser());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path={routes.home} element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route
          path={routes.register}
          element={<PublicRoute component={<RegistrationPage />} />}
        />
        <Route
          path={routes.login}
          element={<PublicRoute component={<LoginPage />} />}
        />
        <Route
          path={routes.diary}
          element={<PrivateRoute component={<DiaryPage />} />}
        />
        <Route
          path={routes.calculator}
          element={<PrivateRoute component={<CalculatorPage />} />}
        />
        <Route path="*" element={<Navigate to={routes.home} />} />
      </Route>
    </Routes>
  );
};
