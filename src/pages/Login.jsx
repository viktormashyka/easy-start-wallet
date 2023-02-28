import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Main } from '../components/Main/Main';

export default function Login() {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Main>
        <LoginForm />
      </Main>
    </>
  );
}
