import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { LayoutForm } from './Layout.styled';
// import { Header } from 'components/Header/Header';
// import { Container } from 'components/Container/Container';

export const Layout = () => {
  return (
    <LayoutForm>
      {/* </Container>- стилі для центрування хедера */}
      {/* Header - Misha Pobochikh */}
      {/* <Container>
        <Header />
      </Container> */}
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </LayoutForm>
  );
};
