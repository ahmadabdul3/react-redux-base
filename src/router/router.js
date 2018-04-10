import React, { Component } from 'react';
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import appRoutes from 'srcRoot/constants/routes';
import sessionClient from 'srcRoot/clients/data_api/session_client';

import NavigationContainer from 'srcRoot/containers/navigation_container';

import LoginPageContainer from 'srcRoot/containers/login_page_container';
import SignupPageContainer from 'srcRoot/containers/signup_page_container';
import HomePageContainer from 'srcRoot/containers/home_page_container';

export default function MainRouter({ store }) {
  function authenticate() {
    const jwtToken = localStorage.getItem('jwt-token');
    if (!jwtToken) browserHistory.push(appRoutes.login);
  }

  function checkIfLoggedIn() {
    const jwtToken = localStorage.getItem('jwt-token');
    if (jwtToken) browserHistory.push(appRoutes.home);
  }

  return (
    <Router history={browserHistory}>
      <Route path={appRoutes.login} component={LoginPageContainer} onEnter={checkIfLoggedIn} />
      <Route path={appRoutes.signup} component={SignupPageContainer} onEnter={checkIfLoggedIn} />

      <Route onEnter={authenticate} component={Layout}>
        <Route path={appRoutes.home} component={HomePageContainer} />
      </Route>
    </Router>
  );
}

function Layout({ children }) {
  return (
    <div className='app-layout'>
      <NavigationContainer />
      <div className='app-body'>
        { children }
      </div>
    </div>
  );
}
