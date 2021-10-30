import { fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { renderWithRedux } from 'helpers/redux';
import Login from 'pages/Login';
import 'mutationobserver-shim';

describe('<Login/>', () => {
  it('should render correctly', () => {
    const { getByPlaceholderText } = renderWithRedux(<Login />);

    expect(getByPlaceholderText('Email')).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
  });

  it('should not display email error message, if email and password are valid', async () => {
    const { getByTestId, getByPlaceholderText } = renderWithRedux(<Login />);

    fireEvent.change(getByPlaceholderText('Email'), {
      target: { value: 'test@email.com' },
    });

    fireEvent.change(getByPlaceholderText('Password'), {
      target: { value: 'password' },
    });

    await act(async () => {
      fireEvent.click(getByTestId('button-join'));
    });

    expect(getByTestId('error-message-email')).toBeEmpty();
  });

  it('should prevent user from signing in, if email is empty', async () => {
    const { getByTestId, getByText } = renderWithRedux(<Login />);

    await act(async () => {
      fireEvent.click(getByTestId('button-join'));
    });

    expect(getByText('Email is required.')).toBeInTheDocument();
  });

  it('should not display error message, if password is valid', async () => {
    const { getByTestId, getByPlaceholderText } = renderWithRedux(<Login />);

    fireEvent.change(getByPlaceholderText('Password'), {
      target: { value: 'password' },
    });

    await act(async () => {
      fireEvent.click(getByTestId('button-join'));
    });

    expect(getByTestId('error-message-password')).toBeEmpty();
  });

  it('should prevent user from signing in, if password is empty', async () => {
    const { getByTestId, getByText } = renderWithRedux(<Login />);

    await act(async () => {
      fireEvent.click(getByTestId('button-join'));
    });

    expect(getByText('Password is required.')).toBeInTheDocument();
  });

  it('should not display errors if all fields are valid', async () => {
    const { getByTestId, getByPlaceholderText } = renderWithRedux(<Login />);

    fireEvent.change(getByPlaceholderText('Email'), {
      target: { value: `test@email.com` },
    });

    fireEvent.change(getByPlaceholderText('Password'), {
      target: { value: 'password' },
    });

    await act(async () => {
      fireEvent.click(getByTestId('button-join'));
    });

    expect(getByTestId('error-message-email')).toBeEmpty();
    expect(getByTestId('error-message-password')).toBeEmpty();
  });
});
