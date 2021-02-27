import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import AuthRoute from './AuthRoute';
import history from '../../utils/browserHistory';

// Route
import Signup from '../../pages/Signup';
import Login from '../../pages/Login';
import EmailVerification from '../../pages/EmailVerification';

// AuthRoute
import Main from '../../pages/Main';

// default
import Empty from '../../pages/Enpty';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route
        exact
        path="/emailVerification/:code"
        component={EmailVerification}
      />

      <AuthRoute exact path="/main" component={Main} />
      {/* <Route exact path="/main" component={Main} /> */}

      <Route component={Empty} />
    </Switch>
  </Router>
);

export default Routes;
