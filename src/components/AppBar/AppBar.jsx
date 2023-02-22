// import { Navigation } from 'components/Navigation/Navigation';
// import { UserMenu } from '../UserMenu/UserMenu';
// import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { AppBarForm } from './AppBar.styled';

// for test
// import { OperationList } from 'components/OperationList/OperationList';
// import { IncomeForm } from 'components/IncomeForm/IncomeForm';
import { Header } from 'components/Header/Header';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <AppBarForm>
      {/* Header - Misha Pobochikh */}
      <Header isLoggedIn={isLoggedIn} />

      {/* <OperationList />
      <Navigation />
      <IncomeForm /> */}
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </AppBarForm>
  );
};
