import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
// import { RestrictedRegistrRoute } from './RestrictedRegistrRoute'; //? for Kapu$ta
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';

//! Страницы маршрутов:
const HomePage = lazy(() => import('../pages/Home/Home.js'));
//! Маршруты REGISTRATION и LOG IN
const RegisterPage = lazy(() => import('../pages/Register.js'));
const LoginPage = lazy(() => import('../pages/Login.jsx'));
//! Маршруты EXPENSES и INCOME
const ExpensesPage = lazy(() =>
  import('../pages/ExpensesPage/ExpensesPage.js')
);
const IncomePage = lazy(() => import('../pages/IncomePage/IncomePage.js'));

//! Маршруты contacts
const ContactsPage = lazy(() => import('../pages/Contacts.js'));
const UploadContactsPage = lazy(() =>
  import('../pages/UploadContacts/UploadContacts.js')
);
//! Маршрут АВТАР
const UploadAvatarPage = lazy(() =>
  import('../pages/UploadAvatarPage/UploadAvatarPage.js')
);

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  console.log('App ==> isRefreshing:', isRefreshing); //!

  return (
    <>
      {isRefreshing ? (
        <b>Refreshing user...</b>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            {/* <Route path="/register" element={<RegisterPage />} /> */}
            {/* //! Маршруты REGISTRATION и LOG IN */}
            <Route
              path="/register"
              element={
                // <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} /> //! 1
                // <RestrictedRoute redirectTo="/" component={<RegisterPage />} /> //! 2
                // <RestrictedRegistrRoute redirectTo="/login" component={<RegisterPage />} /> //! 3
                <RestrictedRoute
                  redirectTo="/login"
                  component={<RegisterPage />}
                /> //! 4
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
            {/* //! Маршруты EXPENSES и INCOME */}
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
                <PrivateRoute redirectTo="/login" component={<IncomePage />} />
              }
            />
            {/* //! Маршруты contacts */}
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
            <Route
              path="/upload"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<UploadContactsPage />}
                />
              }
            />
            {/* //! Маршрут АВТАР */}
            <Route
              path="/avatar"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<UploadAvatarPage />}
                />
              }
            />
          </Route>
        </Routes>
      )}
      <ToastContainer autoClose={1500} theme={'colored'} />
    </>
  );
};
