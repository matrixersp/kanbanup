import React from 'react';
import { TextInput, Button, PrimaryButton } from 'components/styled';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { signUp } from 'features/user/userSlice';
import { useHistory } from 'react-router-dom';

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

const NameInput = styled(TextInput)`
  width: 272px;
  font-weight: normal;
  font-size: 15px;
  padding: 8px;
  display: block;
  margin-bottom: 12px;
  border: 2px solid #f1f1f1;
  border-radius: 4px;
`;

const EmailInput = styled(NameInput).attrs(() => ({
  type: 'email'
}))``;

const PasswordInput = styled(NameInput).attrs(() => ({
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

const LoginLink = styled(Button)`
  font-size: 12px;
  color: #00aecc;
`;

export default function Register() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const handleSignup = data => {
    data.repeatPassword = data.password;
    dispatch(signUp(data));
    history.push('/boards');
  };

  return (
    <Container onSubmit={handleSubmit(handleSignup)}>
      <Title>Create your account</Title>
      <NameInput name="name" placeholder="Full name" ref={register} />
      <EmailInput name="email" placeholder="Email" ref={register} />
      <PasswordInput name="password" placeholder="Password" ref={register} />
      <JoinButton as="input" type="submit" value="Sign Up" />
      <div
        style={{
          color: '#36475b',
          fontSize: '12px',
          marginBottom: '12px'
        }}
      >
        Already a member? <LoginLink href="/login">Sign In</LoginLink>
      </div>
    </Container>
  );
}
