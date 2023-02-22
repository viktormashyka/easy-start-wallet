import { Formik, Form, ErrorMessage } from 'formik';
import {
  Button,
  ButtonGoogl,
  Container,
  Div,
  Input,
  P,
  ErrorText,
  LoginButton,
} from './LoginForm.styled';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ReactComponent as GoogleSvg } from 'images/google.svg';

import { logIn } from 'redux/auth/authOperations';
import { Link } from 'react-router-dom';

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Enter your email'),
  password: Yup.string().min(8).max(20).required('Enter your password'),
});
const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

console.log('LoginForm ---> start'); //!

export const LoginForm = () => {
  const navigate = useNavigate(); ///для возможности переходить по ссылке при нажатии на кнопку типа баттон
  const handleClick = () => {
    navigate('/register'); //// у цьому місці треба прописати шлях до бекенду.нижче розшифрувала
  };
  ///('   ')---'доменне ім'я серверу/шлях до ресурсу на сервері де відбувається аутентифікація/додатковий шлях де аутентифікація відбувається через google'
  const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
    console.log('LoginForm ---> handleSubmit'); //!
    console.log('LoginForm ---> value:', value); //!
    dispatch(logIn(value));
    resetForm();
  };

  console.log('LoginForm ---> render'); //!
  return (
    <Container>
      <P>You can log in with your Google Account:</P>
      <ButtonGoogl type="button" onClick={handleClick}>
        <GoogleSvg />
      </ButtonGoogl>

      <P>Or log in using an email and password, after registering:</P>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <label htmlFor="login">
            Email:
            <Input type="email" name="email" placeholder="your email" />
            <FormError name="email" component="div" />
          </label>
          <label htmlFor="password">
            Password:
            <Input type="password" name="password" />
            <FormError name="password" />
          </label>
          <Div>
            <LoginButton type="submit">LOG IN</LoginButton>
            <Link to="/register">
              <Button type="button">REGISTRATION</Button>
            </Link>
          </Div>
        </Form>
      </Formik>
    </Container>
  );
};
