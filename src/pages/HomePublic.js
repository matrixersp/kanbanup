import React from 'react';
import { TextInput, Button, PrimaryButton } from 'components/styled';
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

const Form = styled.form`
  width: fit-content;
  display: inline-block;
  text-align: center;
  border-radius: 0.25rem;
  padding: 0 1.6rem;
  background-color: white;
`;

const Title = styled.h1`
  font-family: 'Source Sans Pro';
  font-weight: normal;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.primaryTextColor || '#36475b'};
  margin: 1rem 0 1.4rem;
`;

const FormTitle = styled.h2`
  font-family: 'Source Sans Pro';
  font-weight: normal;
  color: #36475b;
  margin: 1rem 0 1.6rem;
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
  margin-bottom: 0.75rem;
  border: none;
  &:focus {
    background-color: #00aecc;
    border: none;
  }
`;

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
              fontSize: '0.75rem',
              marginBottom: '0.75rem'
            }}
          >
            Already a member? <LoginLink href="/login">Sign In</LoginLink>
          </div>
        </Form>
      </GetStarted>
    </Container>
  );
}
