import React from 'react';
import { TextInput, Button, PrimaryButton } from 'components/styled';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { signUp } from 'features/user/userSlice';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 820px;
  margin-top: 20px;
  color: #36475b;
`;

const Hero = styled.section`
  text-align: justify;
  margin-right: 80px;
`;

const GetStarted = styled.section``;

const Form = styled.form`
  width: fit-content;
  display: inline-block;
  text-align: center;
  border-radius: 4px;
  padding: 0 18px;
  background-color: white;
`;

const Title = styled.h1`
  font-family: 'Source Sans Pro';
  font-weight: normal;
  margin-bottom: 20px;
  font-size: 32px;
`;

const FormTitle = styled.h2`
  font-family: 'Source Sans Pro';
  font-weight: normal;
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
  const handleSignup = data => {
    data.repeatPassword = data.password;
    dispatch(signUp(data));
  };
  return (
    <Container>
      <Hero>
        <Title>Boost your Personal and Team Productivity</Title>
        <p>
          Lorem isum dolor, sit amet consectetur adipisicing elit. Sequi velit
          iste facere dolorum rem soluta laudantium necessitatibus quos error
          quaerat, iusto eaque optio molestias adipisci voluptate tempore, vitae
          omnis? Architecto?
        </p>
      </Hero>
      <GetStarted>
        <Form onSubmit={handleSubmit(handleSignup)}>
          <FormTitle>Get Started Now</FormTitle>
          <NameInput name="name" placeholder="Full name" ref={register} />
          <EmailInput name="email" placeholder="Email" ref={register} />
          <PasswordInput
            name="password"
            placeholder="Password"
            ref={register}
          />
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
        </Form>
      </GetStarted>
    </Container>
  );
}
