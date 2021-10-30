import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  Button,
  Form,
  FormInput,
  FormTitle,
  PrimaryButton,
} from 'components/styled';
import { signUp } from 'features/user/userSlice';
import {
  validateEmail,
  validateName,
  validatePassword,
} from 'helpers/validators';

const Container = styled(Form)``;

const Title = styled(FormTitle)``;

const NameInput = styled(FormInput)``;

const EmailInput = styled(NameInput).attrs(() => ({
  type: 'email',
}))``;

const PasswordInput = styled(NameInput).attrs(() => ({
  type: 'password',
}))``;

const JoinButton = styled(PrimaryButton)``;

const LoginLink = styled(Button)`
  font-size: 0.8rem;
  color: #00aecc;
`;

const ErrorMessage = styled.div`
  background-color: #ffd1d1;
  margin-bottom: 0.5rem;
  width: 18rem;
  text-align: justify;
  border-radius: 0.25rem;
  padding: 0.2rem 0.25rem;
  font-size: 0.8rem;
`;

export default function Register() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignup = (data) => {
    data.repeatPassword = data.password;
    data.name = data.name.replace(/\s+/, ' ');
    dispatch(signUp(data));
  };

  const emailError = useSelector((state) => state.user.error);

  return (
    <Container onSubmit={handleSubmit(handleSignup)}>
      <Title>Create your account</Title>
      <ErrorMessage
        data-testid="error-message-name"
        style={{ display: !errors.name && 'none' }}
      >
        {validateName(errors.name)}
      </ErrorMessage>
      <NameInput
        placeholder="Full name"
        {...register('name', {
          pattern: /^[A-Za-z ]+$/,
          required: true,
          maxLength: 50,
        })}
      />
      <ErrorMessage
        data-testid="error-message-email"
        style={{ display: !errors.email && !emailError && 'none' }}
      >
        {validateEmail(errors.email) || emailError}
      </ErrorMessage>
      <EmailInput
        placeholder="Email"
        {...register('email', {
          pattern:
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          required: true,
          minLength: 5,
          maxLength: 255,
        })}
      />
      <ErrorMessage
        data-testid="error-message-password"
        style={{ display: !errors.password && 'none' }}
      >
        {validatePassword(errors.password)}
      </ErrorMessage>
      <PasswordInput
        placeholder="Password"
        {...register('password', {
          required: true,
          minLength: 6,
          maxLength: 255,
        })}
      />
      <JoinButton
        data-testid="button-signup"
        as="input"
        type="submit"
        value="Sign Up"
      />
      <div
        style={{
          color: '#36475b',
          fontSize: '.8rem',
          marginBottom: '.8rem',
        }}
      >
        Already a member? <LoginLink href="/login">Sign In</LoginLink>
      </div>
    </Container>
  );
}
