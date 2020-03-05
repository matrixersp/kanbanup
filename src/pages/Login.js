import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  TextInput,
  Button,
  PrimaryButton,
  Form,
  FormTitle,
  FormInput
} from 'components/styled';
import styled from 'styled-components';
import { signin } from 'features/user/userSlice';

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

export default function Register() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(signin(data));
  };

  return (
    <Container onSubmit={handleSubmit(handleLogin)}>
      <Title>Sign in to continue</Title>
      <EmailInput name="email" placeholder="Email" ref={register} />
      <PasswordInput name="password" placeholder="Password" ref={register} />
      <JoinButton as="input" type="submit" value="Sign In" />
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
