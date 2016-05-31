import { ADD_LOGIN } from '../actions/login';

export default function logins(logins = [], action) {
  switch (action.type) {
    case ADD_LOGIN:
      return [...logins, action.login];
    default:
      return logins;
  }
}
