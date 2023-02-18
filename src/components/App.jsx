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

const RegisterPage = lazy(() => import('../pages/auth/Register'));
const LoginPage = lazy(() => import('../pages/auth/Login'));
const HomePage = lazy(() => import('../pages/transaction/Home'));

const ReportPage = lazy(() => import('../pages/transaction/Report'));
const ExpensesPage = lazy(() => import('../pages/transaction/Expenses'));
const IncomePage = lazy(() => import('../pages/transaction/Income'));

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
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/expenses"
                  component={<LoginPage />}
                />
              }
            />
            <Route index element={<HomePage />}>
              <Route
                path="/expenses"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<ExpensesPage />}
                  />
                }
              />
              <Route
                path="/income"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<IncomePage />}
                  />
                }
              />
              <Route
                path="/reports"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<ReportPage />}
                  />
                }
              >
                {/* <Route
                  path="/expenses-report"
                  element={
                    <PrivateRoute
                      redirectTo="/login"
                      component={<ExpensesReportPage />}
                    />
                  }
                /> */}
                {/* <Route
                  path="/income-report"
                  element={
                    <PrivateRoute
                      redirectTo="/login"
                      component={<IncomeReportPage />}
                    />
                  }
                /> */}
              </Route>
            </Route>
          </Route>
        </Routes>
      )}
      <ToastContainer autoClose={1500} theme={'colored'} />
    </>
  );
};

{
  /* <>
      {isRefreshing ? (
        <b>Refreshing user...</b>
      ) : (
        // <>
        //   <LoginPage />
        //   <RegisterPage />
        //   <ExpensesPage />
        //   <IncomePage />
        // </>

          <Routes>

<Route path="/" element={<Layout />}>
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
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/expenses" //!/home
                  component={<LoginPage />}
                />
              }
              />
              
            <Route index element={<HomePage />}>

                <Route
                  path="/expenses"
                  element={
                    <PrivateRoute redirectTo="/login" component={<ExpensesPage />} /> } />
            <Route
              path="/income"
              element={
                <PrivateRoute redirectTo="/login" component={<IncomePage />} /> } />
            <Route
              path="/reports"
              element={
                <PrivateRoute redirectTo="/login" component={<ReportPage />} />
              }
            />
            <Route
              path="/expenses-report"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ExpensesReportPage />}
                />
              }
            />
            <Route
              path="/income-report"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<IncomeReportPage />}
                />
              }
            />
        <Route/>    

                <Route />
                
        </Routes>
      )}
      <ToastContainer autoClose={1500} theme={'colored'} />
    </> */
}
