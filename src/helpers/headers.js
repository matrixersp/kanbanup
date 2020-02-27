import axios from 'axios';

export function setAuthorizationHeader() {
  const token = localStorage.getItem('TOKEN');
  axios.defaults.headers.common['Authorization'] = token
    ? `Bearer ${token}`
    : null;
}
