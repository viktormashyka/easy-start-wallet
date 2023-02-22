// import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { AppBarForm } from './AppBar.styled';
// import { Header } from 'components/Header/Header';

// for test
// import { OperationList } from 'components/OperationList/OperationList';
import { IncomeForm } from 'components/IncomeForm/IncomeForm';
import { MainHome } from 'components/MainHome/MainHome';
// import { ExpensesForm } from 'components/ExpensesForm/ExpensesForm';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <AppBarForm>
      {/* Header - Misha Pobochikh */}
      {/* <Header />
      <OperationList /> */}
      {/* <Navigation /> */}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <MainHome>
        {/* <ExpensesForm /> */}
        <IncomeForm />
      </MainHome>
    </AppBarForm>
  );
};

// <Header />
// <OperationList />
// <Navigation />
// <IncomeForm />
//       {isLoggedIn ? <UserMenu /> : <AuthNav />}
