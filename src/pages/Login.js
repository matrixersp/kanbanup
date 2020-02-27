import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { TextInput, Button, PrimaryButton } from 'components/styled';
import styled from 'styled-components';
import { signin } from 'features/user/userSlice';

const Container = styled.form`
  display: block;
  margin: 40px auto;
  text-align: center;
  border-radius: 4px;
  padding: 0 18px;
  background-color: white;
`;

const Title = styled.h1`
  font-family: 'Source Sans Pro';
  font-weight: normal;
  font-size: 24px;
  color: #36475b;
  margin: 16px 0 24px;
`;

const EmailInput = styled(TextInput).attrs(() => ({
  type: 'email'
}))`
  width: 270px;
  font-weight: normal;
  font-size: 15px;
  padding: 8px;
  display: block;
  margin-bottom: 12px;
  border: 2px solid #f1f1f1;
  border-radius: 4px;
`;

const PasswordInput = styled(EmailInput).attrs(() => ({
  type: 'password'
}))``;

const JoinButton = styled(PrimaryButton)`
  display: inline-block;
  margin-top: 2px;
  margin-bottom: 12px;
  border: none;
  &:focus {
    background-color: #00aecc;
    border: none;
  }
`;

const SignupLink = styled(Button)`
  font-size: 12px;
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
          fontSize: '12px',
          marginBottom: '12px'
        }}
      >
        Not a member? <SignupLink href="/signup">Sign Up</SignupLink>
      </div>
    </Container>
  );
}
