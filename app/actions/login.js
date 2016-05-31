export const ADD_LOGIN = 'ADD_LOGIN';

export function addLogin(login) {
  return {
    type: ADD_LOGIN,
    login: login
  };
}
