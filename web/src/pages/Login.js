import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  Button,
  PrimaryButton,
  Form,
  FormTitle,
  FormInput
} from 'components/styled';
import styled from 'styled-components';
import { signin } from 'features/user/userSlice';
import { validateEmail, validatePassword } from 'helpers/validators';

const Container = styled(Form)``;

const Title = styled(FormTitle)``;

const EmailInput = styled(FormInput).attrs(() => ({
  type: 'email'
}))``;

const PasswordInput = styled(FormInput).attrs(() => ({
  type: 'password'
}))``;

const JoinButton = styled(PrimaryButton)``;

const SignupLink = styled(Button)`
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
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(signin(data));
  };

  const loginError = useSelector(state => state.user.error);

  return (
    <Container onSubmit={handleSubmit(handleLogin)}>
      <Title>Sign in to continue</Title>
      <ErrorMessage
        data-testid="error-message-email"
        style={{ display: !loginError && !errors.email && 'none' }}
      >
        {loginError || validateEmail(errors.email)}
      </ErrorMessage>
      <EmailInput
        name="email"
        placeholder="Email"
        ref={register({ required: true })}
      />
      <ErrorMessage
        data-testid="error-message-password"
        style={{ display: !errors.password && 'none' }}
      >
        {validatePassword(errors.password)}
      </ErrorMessage>
      <PasswordInput
        name="password"
        placeholder="Password"
        ref={register({ required: true })}
      />
      <JoinButton
        data-testid="button-join"
        as="input"
        type="submit"
        value="Sign In"
      />
      <div
        style={{
          color: '#36475b',
          fontSize: '.8rem',
          marginBottom: '.8rem'
        }}
      >
        Not a member? <SignupLink href="/signup">Sign Up</SignupLink>
      </div>
    </Container>
  );
}
