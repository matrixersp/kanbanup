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
`;

const SignupLink = styled(Button)`
  font-size: 12px;
  color: #00aecc;
`;

export default function Register() {
  return (
    <Container>
      <Title>Sign In</Title>
      <EmailInput placeholder="Email" />
      <PasswordInput placeholder="Password" />
      <JoinButton>Sign In</JoinButton>
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
