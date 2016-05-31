import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import VisibleViewLogin from './containers/VisibleViewLogin';
import VisibleCreateLogin from './containers/VisibleCreateLogin';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={VisibleCreateLogin} />
    <Route path="/viewLogin/:userId" component={VisibleViewLogin} />
    <Route path="/createLogin" component={VisibleCreateLogin} />
  </Route>
);
