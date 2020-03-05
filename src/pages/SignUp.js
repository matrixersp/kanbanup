import React from 'react';
import { TextInput, Button, PrimaryButton } from 'components/styled';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { signUp } from 'features/user/userSlice';
import { useHistory } from 'react-router-dom';

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

const NameInput = styled(TextInput)`
  width: 18rem;
  font-weight: normal;
  font-size: 1rem;
  padding: 0.5rem;
  display: block;
  margin-bottom: 0.8rem;
  border: 0.125rem solid #f1f1f1;
  border-radius: 0.25rem;
`;

const EmailInput = styled(NameInput).attrs(() => ({
  type: 'email'
}))``;

const PasswordInput = styled(NameInput).attrs(() => ({
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
