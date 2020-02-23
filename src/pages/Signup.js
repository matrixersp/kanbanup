import React from 'react';
import { TextInput, Button, PrimaryButton } from 'components/styled';
import styled from 'styled-components';

const Container = styled.div`
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
  margin: 16px 0 20px;
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
`;

const LoginLink = styled(Button)`
  font-size: 12px;
  color: #00aecc;
`;

export default function Register() {
  return (
    <Container>
      <Title>Sign Up</Title>
      <NameInput placeholder="Full name" />
      <EmailInput placeholder="Email" />
      <PasswordInput placeholder="Password" />
      <JoinButton>Join Now</JoinButton>
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
