import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Main } from '../components/Main/Main';

export default function Register() {
  return (
    <>
      <Helmet>
        <title>Kapu$ta</title>
      </Helmet>
      <Main>
        <RegisterForm />
      </Main>
    </>
  );
}
