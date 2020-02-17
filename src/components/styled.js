import styled from 'styled-components';

const Button = styled.a`
  color: #fff;
  text-decoration: none;
  line-height: 1.5;
  cursor: pointer;
  font-size: 16px;
  opacity: 0.9;
  transition: all 0.2s ease;
  user-select: none;
  &:hover {
    opacity: 1;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: #00aecc;
  border-radius: 4px;
  padding: 5px 18px 6px;
`;

const TranslucentButton = styled(Button)`
  background: rgba(255, 255, 255, 0.36);
  padding: 6px 14px 8px;
  text-align: center;
  font-size: 16px;
  border-radius: 4px;
  opacity: 1;
  &:hover {
    background: rgba(255, 255, 255, 0.46);
  }
`;

const TertiaryButton = styled(Button)`
  display: flex;
  align-items: center;
  color: #fff;
  padding: 4px 6px;
  background-color: rgba(242, 242, 243, 0.28);
  border-radius: 4px;
  opacity: 1;
  &:hover {
    background-color: rgba(242, 242, 243, 0.4);
  }
`;

const TextInput = styled.input.attrs(() => ({
  type: 'input'
}))`
  background-color: inherit;
  color: #36475b;
  outline: none;
  font-size: 17px;
  font-weight: bold;
  padding: 4px 6px;
  border-radius: 4px;
  border: 2px solid transparent;
  cursor: pointer;
  &:focus {
    border: 2px solid #00aecc;
    background-color: #fff;
  }
`;

const TextArea = styled.textarea`
  color: #36475b;
  outline: none;
  font-size: 16px;
  padding: 4px 6px;
  margin-bottom: 6px;
  border-radius: 4px;
  line-height: 1.5;
  border: 2px solid transparent;
  resize: none;
  &:focus {
    border: 2px solid #00aecc;
    user-select: all;
  }
`;

const IconWrapper = styled.i`
  margin-left: 14px;
  opacity: 0.7;
  svg {
    margin: 0 auto;
    vertical-align: middle;
  }
  &:hover {
    opacity: 1;
  }
`;

export {
  Button,
  SecondaryButton,
  TranslucentButton,
  TertiaryButton,
  TextInput,
  TextArea,
  IconWrapper
};
