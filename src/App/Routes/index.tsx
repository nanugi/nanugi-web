import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import callCookie from '../../utils/cookie';
import history from '../../utils/browserHistory';
import AuthRoute from './AuthRoute';

// Route
import Signup from '../../pages/Signup';
import Login from '../../pages/Login';
import Find from '../../pages/Find';
import EmailVerification from '../../pages/EmailVerification';

// AuthRoute
import Main from '../../pages/Main';
import Post from '../../pages/Post';
import PostWrite from '../../pages/PostWrite';

// default
import Empty from '../../pages/Enpty';

function Routes() {
  const staySignedIn = callCookie.get('staySignedIn');
  if (staySignedIn) callCookie.set('jwt', staySignedIn, 2);

  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (staySignedIn ? <Main /> : <Login />)}
        />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route
          exact
          path="/emailVerification/:code"
          component={EmailVerification}
        />

        <Route exact path="/find" component={Find} />

        <AuthRoute exact path="/main" component={Main} />
        <AuthRoute exact path="/post/:id" component={Post} />
        <AuthRoute exact path="/write/post" component={PostWrite} />

        <Route component={Empty} />
      </Switch>
    </Router>
  );
}
export default Routes;
