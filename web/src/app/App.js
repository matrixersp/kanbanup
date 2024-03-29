import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import history from 'helpers/history';

import Header from 'components/Header';
import SignUp from 'pages/SignUp';
import Login from 'pages/Login';
import Board from 'pages/Board';
import Boards from 'pages/Boards';
import HomePublic from 'pages/HomePublic';
import NotFound from 'pages/NotFound';

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
  const token = useSelector((state) => state.user.token);
  const isLoading = useSelector((state) => state.user.isLoading);

  setAuthorizationHeader();

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
                  exact
                  path="/boards/:id"
                  component={({ location }) =>
                    location.state === '404' ? (
                      <Route component={NotFound} />
                    ) : (
                      <Board />
                    )
                  }
                />
                <Route exact path="/">
                  <Redirect to="/boards" />
                </Route>
                <Route component={NotFound} />
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
