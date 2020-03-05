import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeContext } from 'styled-components';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from 'helpers/history';

import Header from 'components/Header';
import SignUp from 'pages/SignUp';
import Login from 'pages/Login';
import Board from 'pages/Board';
import Boards from 'pages/Boards';
import HomePublic from 'pages/HomePublic';
import NotFound from 'pages/NotFound';

import { toggleListActions } from 'app/appSlice';
import { isNonEmptyObject } from 'helpers/dom';
import { setAuthorizationHeader } from 'helpers/headers';

const Root = styled.div`
  position: relative;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background: rgb(0, 174, 204);
`;

export default function App() {
  const token = useSelector(state => state.user.token);
  const isLoading = useSelector(state => state.user.isLoading);

  setAuthorizationHeader();

  const themeContext = useContext(ThemeContext);
  console.log(themeContext);
  return (
    <Root>
      <Router history={history}>
        {isLoading && !token ? (
          <h1>Sign In...</h1>
        ) : (
          <>
            <Header />
            {token ? (
              <Switch>
                <Route exact path="/boards" component={Boards} />
                <Route
                  path="/boards/:id"
                  component={({ location }) =>
                    location.state === '404' ? (
                      <Route component={NotFound} />
                    ) : (
                      <Board />
                    )
                  }
                />
                <Route component={NotFound} />
                <Route exact path="/">
                  <Redirect to="/boards" />
                </Route>
              </Switch>
            ) : (
              <Switch>
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/" component={HomePublic} />
                <Route component={NotFound} />
              </Switch>
            )}
          </>
        )}
      </Router>
    </Root>
  );
}
