import { Formik, Form, ErrorMessage } from 'formik';
import {
  Button,
  ButtonGoogl,
  Container,
  Div,
  Input,
  P,
  ErrorText,
  RegisterButton,
} from './RegisterForm.styled';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/authOperations';
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

console.log('RegisterForm ---> start'); //!

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
    console.log('RegisterForm ---> handleSubmit'); //!
    console.log('RegisterForm ---> value:', value); //!
    dispatch(register(value));
    resetForm();
  };

  console.log('RegisterForm ---> render'); //!
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
            <Input type="text" name="email" placeholder="your email" />
            <FormError name="email" component="div" />
            {/* <br /> */}
          </label>
          <label htmlFor="password">
            Password:
            <Input type="password" name="password" />
            <FormError name="password" />
          </label>
          <Div>
            <Link to="/login">
              <Button type="button">LOG IN</Button>
            </Link>
            <RegisterButton type="submit">REGISTRATION</RegisterButton>
          </Div>
        </Form>
      </Formik>
    </Container>
  );
};
