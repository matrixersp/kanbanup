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

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 0 auto;
  width: 48em;
  color: #36475b;
`;

const Hero = styled.section`
  text-align: justify;
  text-align: center;
  margin-right: 4rem;
`;

const GetStarted = styled.section``;

const SignupForm = styled(Form)`
  width: fit-content;
  display: inline-block;
  position: relative;
  top: 0;
  left: 0;
  transform: none;
`;

const Title = styled(FormTitle)``;

const NameInput = styled(FormInput)``;

const EmailInput = styled(FormInput).attrs(() => ({
  type: 'email'
}))``;

const PasswordInput = styled(FormInput).attrs(() => ({
  type: 'password'
}))``;

const JoinButton = styled(PrimaryButton)``;

const LoginLink = styled(Button)`
  font-size: 0.75rem;
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
        <SignupForm onSubmit={handleSubmit(handleSignup)}>
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
              fontSize: '0.75rem',
              marginBottom: '0.75rem'
            }}
          >
            Already a member? <LoginLink href="/login">Sign In</LoginLink>
          </div>
        </SignupForm>
      </GetStarted>
    </Container>
  );
}
