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
import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/authOperations';
import { Link } from 'react-router-dom';

// changed in const schema Yup on yup
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
      <ButtonGoogl type="button">Google</ButtonGoogl>
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
            {/* <br /> */}
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
