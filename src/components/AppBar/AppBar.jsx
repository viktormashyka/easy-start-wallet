// import { Navigation } from 'components/Navigation/Navigation';
// import { UserMenu } from '../UserMenu/UserMenu';
// import { AuthNav } from '../AuthNav/AuthNav';
// import { useAuth } from 'hooks';
import { AppBarForm } from './AppBar.styled';

export const AppBar = () => {
//   const { isLoggedIn } = useAuth();
  return (
      <AppBarForm>
          <div>Header from</div>
      {/* <Navigation /> */}
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </AppBarForm>
  );
};
