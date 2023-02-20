import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Layout } from './Layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { Loader } from './Loader/Loader';

const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const HomePage = lazy(() => import('../pages/Home'));
const ExpensesForm = lazy(() =>
  import('../components/ExpensesForm/ExpensesForm')
);
const IncomeForm = lazy(() => import('../components/IncomeForm/IncomeForm'));
const ReportPage = lazy(() => import('../pages/Report'));
const ExpensesReportForm = lazy(() =>
  import('../components/ExpensesReportForm/ExpensesReportForm')
);
const IncomeReportForm = lazy(() =>
  import('../components/IncomeReportForm/IncomeReportForm')
);

// const UploadContactsPage = lazy(() =>
//   import('../pages/UploadContacts/UploadContacts.js')
// );
// const UploadAvatarPage = lazy(() =>
//   import('../pages/UploadAvatarPage/UploadAvatarPage.js')
// );

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        // <b>Refreshing user...</b>
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Redirect exact from="/" to="/login" /> */}
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/login"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/login"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/home"
              element={
                <PrivateRoute redirectTo="/login" component={<HomePage />} />
              }
            >
              <Route
                path="expenses"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<ExpensesForm />}
                  />
                }
              />
              <Route
                path="income"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<IncomeForm />}
                  />
                }
              />
            </Route>
            <Route
              path="/report"
              element={
                <PrivateRoute redirectTo="/login" component={<ReportPage />} />
              }
            >
              <Route
                path="expenses"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<ExpensesReportForm />}
                  />
                }
              />
              <Route
                path="income"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<IncomeReportForm />}
                  />
                }
              />
            </Route>
          </Route>
        </Routes>
      )}
      <ToastContainer autoClose={1500} theme={'colored'} />
    </>
  );
};
