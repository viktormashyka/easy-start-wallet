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

// const AuthPage = lazy(() => import('../pages/auth/Auth'));
// const LoginForm = lazy(() => import('../components/LoginForm/LoginForm'));
// const RegisterForm = lazy(() =>
//   import('../components/RegisterForm/RegisterForm')
// );
const RegisterPage = lazy(() => import('../pages/auth/Register'));
const LoginPage = lazy(() => import('../pages/auth/Login'));

const HomePage = lazy(() => import('../pages/transaction/Home'));
const ExpensesForm = lazy(() =>
  import('../components/ExpensesForm/ExpensesForm')
);
const IncomeForm = lazy(() => import('../components/IncomeForm/IncomeForm'));

// const ExpensesPage = lazy(() => import('../pages/transaction/Expenses'));
// const IncomePage = lazy(() => import('../pages/transaction/Income'));
const ReportPage = lazy(() => import('../pages/reports/Report'));
const ExpensesReportForm = lazy(() =>
  import('../components/ExpensesReportForm/ExpensesReportForm')
);
const IncomeReportForm = lazy(() =>
  import('../components/IncomeReportForm/IncomeReportForm')
);
// const ExpensesReportPage = lazy(() =>
//   import('../pages/reports/ExpensesReport')
// );
// const IncomeReportPage = lazy(() => import('../pages/reports/IncomeReport'));

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
        <b>Refreshing user...</b>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route path="/" element={<AuthPage />}>
              <Route
                path="register"
                element={
                  <RestrictedRoute
                    redirectTo="/login"
                    component={<RegisterForm />}
                  />
                }
              />
              <Route
                path="login"
                element={
                  <RestrictedRoute
                    redirectTo="/login"
                    component={<LoginForm />}
                  />
                }
              />
            </Route> */}
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
                path="expenses-report"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<ExpensesReportForm />}
                  />
                }
              />
              <Route
                path="income-report"
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
