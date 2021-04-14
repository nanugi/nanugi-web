import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import callCookie from '../../utils/cookie';
import history from '../../utils/browserHistory';
import AuthRoute from './AuthRoute';

// Route
import LandingPage from '../../pages/LandingPage';
import Signup from '../../pages/Signup';
import Login from '../../pages/Login';
import Find from '../../pages/Find';
import EmailVerification from '../../pages/EmailVerification';
import CustomerServicePage from '../../pages/CustomerService';
import PolicyPage from '../../pages/Policy';

// AuthRoute
import Main from '../../pages/Main';
import Post from '../../pages/Post';
import PostWrite from '../../pages/PostWrite';
import ProfileEditPage from '../../pages/ProfileEdit';
import MyPage from '../../pages/MyPage';
import MyPost from '../../pages/MyPost';
import MyFavs from '../../pages/MyFavs';

// default
import Empty from '../../pages/Enpty';
import Profile from "../../pages/Profile";

function Routes() {
  const staySignedIn = callCookie.get('staySignedIn');
  if (staySignedIn) callCookie.set('jwt', staySignedIn, 2);

  return (
    <Router history={history}>
      <Switch>
        {/* Route */}
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route
          exact
          path="/emailVerification/:code"
          component={EmailVerification}
        />
        <Route exact path="/find" component={Find} />
        <Route exact path="/policies" component={PolicyPage} />

        {/* AuthRoute */}
        {/* <AuthRoute exact path="/main" component={Main} /> */}
        <AuthRoute exact path="/post/:id" component={Post} />
        <AuthRoute exact path="/write/post" component={PostWrite} />

        <AuthRoute exact path="/mypage" component={MyPage} />
        <AuthRoute exact path="/mypage/posts" component={MyPost} />
        <AuthRoute exact path="/mypage/favs" component={MyFavs} />

        <AuthRoute exact path="/mypage/edit" component={ProfileEditPage} />
        <AuthRoute exact path="/cs" component={CustomerServicePage} />

        <AuthRoute exact path="/profile/:id" component={Profile} />

        <Route component={Empty} />
      </Switch>
    </Router>
  );
}
export default Routes;
