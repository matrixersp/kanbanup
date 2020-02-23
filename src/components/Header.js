import React from 'react';
import styled from 'styled-components';
import { Button, TranslucentButton } from 'components/styled';

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 3px 16px;
  margin-bottom: 8px;
  background-color: rgba(32, 33, 36, 0.36);
  font-family: 'Source Sans pro';
`;

const Brand = styled.a`
  display: flex;
  text-decoration: none;
  align-items: center;
  h1 {
    font-weight: 600;
    font-family: 'Roboto Slab';
    background-color: #f2f2f3;
    padding: 1px 10px;
    font-size: 28px;
    border-radius: 100%;
    color: rgb(0, 174, 204);
    display: inline;
  }
  span {
    font-size: 18px;
    padding-left: 3px;
    color: #f2f2f3;
  }
`;

const LoginButton = styled(Button)`
  margin-left: auto;
`;
const SignupButton = styled(TranslucentButton)`
  margin-left: 12px;
  padding: 4px 14px 6px;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Brand href="/">
        <h1>K</h1>
        <span style={{ marginTop: '-2px' }}>anbored</span>
      </Brand>
      <LoginButton href="/login">Sign In</LoginButton>
      <SignupButton href="/signup">Sign Up</SignupButton>
    </HeaderWrapper>
  );
}
