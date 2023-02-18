import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
//example import from styled component
import { LayoutForm } from './Layout.styled';

export const Layout = () => {
  return (
    <LayoutForm>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </LayoutForm>
  );
};
