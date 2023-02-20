import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Main } from '../components/Main/Main';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <Main>
        <RegisterForm />
      </Main>
    </div>
  );
}
