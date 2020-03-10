import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Button, TranslucentButton } from 'components/styled';
import { useHistory } from 'react-router-dom';
import { logout } from 'app/appSlice';

const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.25rem 1rem;
  background-color: rgba(32, 33, 36, 0.36);
  font-family: 'Source Sans pro';
`;

const Brand = styled.a`
  display: flex;
  text-decoration: none;
  align-items: center;
  h2 {
    font-weight: 600;
    font-family: 'Roboto Slab';
    background-color: #f2f2f3;
    padding: 0.2rem 0;
    width: 2.4rem;
    height: 2.4rem;
    font-size: 1.8rem;
    text-align: center;
    border-radius: 100%;
    color: rgb(0, 174, 204);
    display: inline;
    margin: 0;
  }
  span {
    font-size: 1.1rem;
    padding-left: 0.188rem;
    color: #f2f2f3;
  }
`;

const LoginButton = styled(Button)`
  margin-left: auto;
  padding-bottom: 0.1rem;
`;

const SignupButton = styled(TranslucentButton)`
  margin-left: 1.2rem;
  padding: 0.35rem 1rem;
`;

const LogoutButton = styled(Button)`
  margin-left: auto;
`;

export default function Header() {
  const token = useSelector(state => state.user.token);
  const history = useHistory();

  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
    history.push('/login');
  };

  return (
    <Container>
      <Brand href="/">
        <h2>K</h2>
        <span style={{ marginTop: '-.125rem' }}>anbello</span>
      </Brand>
      {token ? (
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      ) : (
        <>
          <LoginButton href="/login">Sign In</LoginButton>
          <SignupButton href="/signup">Sign Up</SignupButton>
        </>
      )}
    </Container>
  );
}
