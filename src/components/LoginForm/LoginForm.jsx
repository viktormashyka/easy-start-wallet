import { Formik, Form, ErrorMessage } from 'formik';
import {
  Button,
  ButtonGoogl,
  Container,
  Div,
  Input,
  P,
  ErrorText,
} from './LoginForm.styled';
import * as yup from 'yup';

// changed in const schema Yup on yup
const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Enter your email'),
  password: yup.string().min(8).max(20).required('Enter your password'),
});
const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const LoginForm = () => {
  const handleSubmit = (velues, { resetForm }) => {
    console.log(velues);
    resetForm();
  };
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
            <Button type="submit">LOG IN</Button>
          </Div>
        </Form>
      </Formik>
    </Container>
  );
};
