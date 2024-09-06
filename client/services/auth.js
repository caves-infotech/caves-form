import Cookies from 'js-cookie';

export const saveToken = (token) => {
  Cookies.set('token', token);
};

export const getToken = () => {
  return Cookies.get('token');
};

export const removeToken = () => {
  Cookies.remove('token');
};
