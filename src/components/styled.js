import styled from 'styled-components';

const Button = styled.a`
  color: ${({ theme }) => theme.secondaryTextColor || '#fff'};
  text-decoration: none;
  display: inline-block;
  line-height: 1.5;
  cursor: pointer;
  font-size: ${({ theme }) => theme.bodyFontSize || '1rem'};
  opacity: 0.9;
  transition: all 0.2s ease;
  user-select: none;
  &:hover {
    opacity: 1;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.primaryBgColor};
  border-radius: ${({ theme }) => theme.primaryBorderRadius || '10rem'};
  padding: 0.4rem 2rem 0.45rem;
  margin-top: 0.125rem;
  margin-bottom: 0.8rem;
  border: none;
  &:focus {
    background-color: #00aecc;
    border: none;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.primaryBgColor || '#00aecc'};
  border-radius: 0.25rem;
  padding: 0.35rem 1rem;
`;

const TranslucentButton = styled(Button)`
  background-color: ${({ theme }) =>
    theme.translucentButtonBgColor || 'rgba(255, 255, 255, 0.36)'};
  border-radius: 0.25rem;
  padding: 0.4rem 2rem 0.45rem;
  text-align: center;
  font-size: 1rem;
  border-radius: 0.25rem;
  opacity: 1;
  &:hover {
    background-color: rgba(255, 255, 255, 0.46);
  }
`;

const TertiaryButton = styled(Button)`
  display: flex;
  align-items: center;
  color: #fff;
  padding: 0.25rem 0.4rem;
  background-color: rgba(242, 242, 243, 0.28);
  border-radius: 0.25rem;
  opacity: 1;
  &:hover {
    background-color: rgba(242, 242, 243, 0.4);
  }
`;

const TextInput = styled.input.attrs(() => ({
  type: 'text'
}))`
  background-color: inherit;
  color: ${({ theme }) => theme.primaryTextColor || '#36475b'};
  outline: none;
  font-size: ${({ theme }) => theme.bodyFontSize || '1rem'};
  font-weight: bold;
  padding: 0.25rem 0.4rem;
  border-radius: 0.25rem;
  border: 0.125rem solid transparent;
  cursor: pointer;
  &:focus {
    border: 0.125rem solid #00aecc;
    background-color: #fff;
  }
`;

const TextArea = styled.textarea`
  color: ${({ theme }) => theme.primaryTextColor || '#36475b'};
  outline: none;
  font-size: ${({ theme }) => theme.bodyFontSize || '1rem'};
  padding: 0.25rem 0.4rem;
  margin-bottom: 0.4rem;
  border-radius: 0.25rem;
  line-height: 1.4;
  border: 0.125rem solid transparent;
  resize: none;
  &:focus {
    border: 0.125rem solid #00aecc;
    user-select: all;
  }
`;

const IconWrapper = styled.i`
  opacity: 0.7;
  cursor: pointer;
  svg {
    vertical-align: middle;
  }
  &:hover {
    opacity: 1;
  }
`;

const Form = styled.form`
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

const FormTitle = styled.h2`
  font-family: 'Source Sans Pro';
  font-weight: normal;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.primaryTextColor || '#36475b'};
  margin: 1rem 0 1.4rem;
`;

const FormInput = styled.input.attrs(() => ({ type: 'text' }))`
  outline: none;
  color: ${({ theme }) => theme.primaryTextColor || '#36475b'};
  width: 18rem;
  font-weight: normal;
  font-size: ${({ theme }) => theme.bodyFontSize || '1rem'};
  padding: 0.5rem;
  display: block;
  margin-bottom: 0.8rem;
  border: 0.125rem solid #f1f1f1;
  border-radius: 0.25rem;
  &:focus {
    border: 0.125rem solid #00aecc;
    background-color: #fff;
  }
`;

export {
  Button,
  PrimaryButton,
  SecondaryButton,
  TranslucentButton,
  TertiaryButton,
  TextInput,
  TextArea,
  IconWrapper,
  Form,
  FormTitle,
  FormInput
};
