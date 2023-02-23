// import { Navigation } from 'components/Navigation/Navigation';
// import { UserMenu } from '../UserMenu/UserMenu';
// import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { AppBarForm } from './AppBar.styled';

// for test
// import { OperationList } from 'components/OperationList/OperationList';
// import { IncomeForm } from 'components/IncomeForm/IncomeForm';
import { Header } from 'components/Header/Header';
import { Container } from 'components/Container/Container';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <AppBarForm>
      {/* Header - Misha Pobochikh */}
      <Container>
        <Header isLoggedIn={isLoggedIn} />
      </Container>

      {/* <OperationList />
      <Navigation />
      <IncomeForm /> */}
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </AppBarForm>
  );
};
