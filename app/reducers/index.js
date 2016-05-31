import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import logins from './logins';

const rootReducer = combineReducers({
  logins,
  routing
});

export default rootReducer;
