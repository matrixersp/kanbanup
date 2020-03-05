import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { TextInput, Button, PrimaryButton } from 'components/styled';
import styled from 'styled-components';
import { signin } from 'features/user/userSlice';

const Container = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  display: block;
  text-align: center;
  border-radius: 0.25rem;
  padding: 0 1rem;
  background-color: white;
`;

const Title = styled.h1`
  font-family: 'Source Sans Pro';
  font-weight: normal;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.primaryTextColor || '#36475b'};
  margin: 1rem 0 1.4rem;
`;

const EmailInput = styled(TextInput).attrs(() => ({
  type: 'email'
}))`
  width: 18rem;
  font-weight: normal;
  font-size: 1rem;
  padding: 0.5rem;
  display: block;
  margin-bottom: 0.8rem;
  border: 0.125rem solid #f1f1f1;
  border-radius: 0.25rem;
`;

const PasswordInput = styled(EmailInput).attrs(() => ({
  type: 'password'
}))``;

const JoinButton = styled(PrimaryButton)`
  display: inline-block;
  margin-top: 0.125rem;
  margin-bottom: 0.8rem;
  border: none;
  &:focus {
    background-color: #00aecc;
    border: none;
  }
`;

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
        Not a member? <SignupLink href="/login">Sign Up</SignupLink>
      </div>
    </Container>
  );
}
