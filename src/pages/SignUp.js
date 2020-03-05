import React from 'react';
import {
  Button,
  PrimaryButton,
  Form,
  FormTitle,
  FormInput
} from 'components/styled';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { signUp } from 'features/user/userSlice';
import { useHistory } from 'react-router-dom';

const Container = styled(Form)``;

const Title = styled(FormTitle)``;

const NameInput = styled(FormInput)``;

const EmailInput = styled(NameInput).attrs(() => ({
  type: 'email'
}))``;

const PasswordInput = styled(NameInput).attrs(() => ({
  type: 'password'
}))``;

const JoinButton = styled(PrimaryButton)``;

const LoginLink = styled(Button)`
  font-size: 0.8rem;
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
          fontSize: '.8rem',
          marginBottom: '.8rem'
        }}
      >
        Already a member? <LoginLink href="/login">Sign In</LoginLink>
      </div>
    </Container>
  );
}
