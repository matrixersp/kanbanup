import { renderWithRedux } from 'helpers/redux';
import 'mutationobserver-shim';
import React from 'react';
import App from './App';

describe('<App/>', () => {
  it('should render correctly with redux with defaults', () => {
    const { getByTestId, getByRole } = renderWithRedux(<App />);

    expect(getByRole('link', { name: /K\s?anbanup/ })).toBeInTheDocument();
    expect(getByTestId('hero-title')).toHaveTextContent(
      'Boost your Personal and Team Productivity'
    );
  });

  it('should render sign in and sign up links', () => {
    const { getAllByRole, getByRole } = renderWithRedux(<App />);

    expect(getAllByRole('link', { name: 'Sign In' }).length).toBe(2);
    expect(getByRole('link', { name: 'Sign Up' })).toBeInTheDocument();
  });

  it('should not render logout link', () => {
    const { queryByRole } = renderWithRedux(<App />);

    expect(queryByRole('link', { name: 'Logout' })).toBeNull();
  });

  it('should render signup form', () => {
    const { getByPlaceholderText } = renderWithRedux(<App />);

    expect(getByPlaceholderText('Full name')).toBeInTheDocument();
    expect(getByPlaceholderText('Email')).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
  });
});
