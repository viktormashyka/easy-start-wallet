import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { AppBarForm } from './AppBar.styled';
import { Header } from 'components/Header/Header';

// for test
import { OperationList } from 'components/OperationList/OperationList';
import { IncomeForm } from 'components/IncomeForm/IncomeForm';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <AppBarForm>
      {/* Header - Misha Pobochikh */}
      <Header />
      <OperationList />
      <Navigation />
      <IncomeForm />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBarForm>
  );
};
