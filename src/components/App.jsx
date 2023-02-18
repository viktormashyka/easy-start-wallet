import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
// import { Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { Layout } from './Layout/Layout';
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';

const RegisterPage = lazy(() => import('../pages/auth/Register'));
const LoginPage = lazy(() => import('../pages/auth/Login'));
// const HomePage = lazy(() => import('../pages/transaction/Home'));

const ExpensesPage = lazy(() => import('../pages/transaction/Expenses'));
const IncomePage = lazy(() => import('../pages/transaction/Income'));

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
        <>
          <LoginPage />
          <RegisterPage />
          <ExpensesPage />
          <IncomePage />
        </>
        //**Routes */
        // <Routes>
        //   <Route path="/" element={<Layout />}>
        //     <Route index element={<HomePage />} />
        //     <Route
        //       path="/register"
        //       element={
        //         <RestrictedRoute
        //           redirectTo="/login" //! redirectTo="/contacts"
        //           component={<RegisterPage />}
        //         />
        //       }
        //     />
        //     <Route
        //       path="/login"
        //       element={
        //         <RestrictedRoute
        //           redirectTo="/expenses" //!/home
        //           component={<LoginPage />}
        //         />
        //       }
        //     />
        //     {/* //! Маршруты EXPENSES и INCOME */}
        //     {/* <Route
        //       path="/expenses"
        //       element={
        //         <PrivateRoute
        //           redirectTo="/login"
        //           component={<ExpensesPage />}
        //         />
        //       }
        //     /> */}
        //     {/* <Route
        //       path="/income"
        //       element={
        //         <PrivateRoute redirectTo="/login" component={<IncomePage />} />
        //       }
        //     /> */}
        //     {/* //! Маршруты contacts */}
        //     {/* <Route
        //       path="/contacts"
        //       element={
        //         <PrivateRoute
        //           redirectTo="/login"
        //           component={<ContactsPage />}
        //         />
        //       }
        //     /> */}
        //     {/* <Route
        //       path="/upload"
        //       element={
        //         <PrivateRoute
        //           redirectTo="/login"
        //           component={<UploadContactsPage />}
        //         />
        //       }
        //     /> */}
        //     {/* //! Маршрут АВТАР */}
        //     {/* <Route
        //       path="/avatar"
        //       element={
        //         <PrivateRoute
        //           redirectTo="/login"
        //           component={<UploadAvatarPage />}
        //         />
        //       }
        //     /> */}
        //   </Route>
        // </Routes>
      )}
      <ToastContainer autoClose={1500} theme={'colored'} />
    </>
  );
};
