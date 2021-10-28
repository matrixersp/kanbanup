import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderWithRedux } from 'helpers/redux';
import SignUp from 'pages/SignUp';
import 'mutationobserver-shim';
import { act } from 'react-dom/test-utils';

describe('<SignUp/>', () => {
  it('should render correctly', () => {
    const { getByPlaceholderText } = renderWithRedux(<SignUp />);

    expect(getByPlaceholderText('Full name')).toBeInTheDocument();
    expect(getByPlaceholderText('Email')).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
  });

  it('should not return name error message, if name is valid', async () => {
    const { getByTestId, getByPlaceholderText } = renderWithRedux(<SignUp />);

    fireEvent.change(getByPlaceholderText('Full name'), {
      target: { value: 'Name' }
    });

    await act(async () => {
      fireEvent.click(getByTestId('button-signup'));
    });

    expect(getByTestId('error-message-name')).toBeEmpty();
  });

  it('should prevent user from being added, if name is empty', async () => {
    const { getByTestId, getByText } = renderWithRedux(<SignUp />);

    await act(async () => {
      fireEvent.click(getByTestId('button-signup'));
    });

    expect(getByText('Name is required.')).toBeInTheDocument();
  });

  it('should prevent user from being added, if name is invalid', async () => {
    const { getByTestId, getByText, getByPlaceholderText } = renderWithRedux(
      <SignUp />
    );

    fireEvent.change(getByPlaceholderText('Full name'), {
      target: { value: 'Name 98' }
    });

    await act(async () => {
      fireEvent.click(getByTestId('button-signup'));
    });

    expect(
      getByText('Name must contain alphabets and spaces only.')
    ).toBeInTheDocument();
  });

  it('should not display email error message, if email is valid', async () => {
    const { getByTestId, getByPlaceholderText } = renderWithRedux(<SignUp />);

    fireEvent.change(getByPlaceholderText('Email'), {
      target: { value: 'test@email.com' }
    });
    await act(async () => {
      fireEvent.click(getByTestId('button-signup'));
    });

    expect(getByTestId('error-message-email')).toBeEmpty();
  });

  it('should prevent user from being added, if email is empty', async () => {
    const { getByTestId, getByText } = renderWithRedux(<SignUp />);

    await act(async () => {
      fireEvent.click(getByTestId('button-signup'));
    });

    expect(getByText('Email is required.')).toBeInTheDocument();
  });

  it('should prevent user from being added, if email is invalid', async () => {
    const { getByTestId, getByText, getByPlaceholderText } = renderWithRedux(
      <SignUp />
    );

    fireEvent.change(getByPlaceholderText('Email'), {
      target: { value: 'test@email' }
    });
    await act(async () => {
      fireEvent.click(getByTestId('button-signup'));
    });

    expect(getByText('Invalid email.')).toBeInTheDocument();
  });

  it('should not display error message, if password is valid', async () => {
    const { getByTestId, getByPlaceholderText } = renderWithRedux(<SignUp />);

    fireEvent.change(getByPlaceholderText('Password'), {
      target: { value: 'password' }
    });

    await act(async () => {
      fireEvent.click(getByTestId('button-signup'));
    });

    expect(getByTestId('error-message-password')).toBeEmpty();
  });

  it('should prevent user from being added, if password is empty', async () => {
    const { getByTestId, getByText } = renderWithRedux(<SignUp />);

    await act(async () => {
      fireEvent.click(getByTestId('button-signup'));
    });

    expect(getByText('Password is required.')).toBeInTheDocument();
  });

  it('should prevent user from being added, if password is invalid', async () => {
    const { getByTestId, getByPlaceholderText } = renderWithRedux(<SignUp />);

    fireEvent.change(getByPlaceholderText('Password'), {
      target: { value: 'pass' }
    });
    await act(async () => {
      fireEvent.click(getByTestId('button-signup'));
    });

    expect(getByTestId('error-message-password')).not.toBeEmpty();
  });

  it('should not display errors if all fields are valid', async () => {
    const { getByTestId, getByPlaceholderText } = renderWithRedux(<SignUp />);

    fireEvent.change(getByPlaceholderText('Full name'), {
      target: { value: 'Test Name' }
    });

    const timestamp = Date.now();
    fireEvent.change(getByPlaceholderText('Email'), {
      target: { value: `test${timestamp}@email.com` }
    });

    fireEvent.change(getByPlaceholderText('Password'), {
      target: { value: 'password' }
    });

    await act(async () => {
      fireEvent.click(getByTestId('button-signup'));
    });

    expect(getByTestId('error-message-name')).toBeEmpty();
    expect(getByTestId('error-message-email')).toBeEmpty();
    expect(getByTestId('error-message-password')).toBeEmpty();
  });
});
