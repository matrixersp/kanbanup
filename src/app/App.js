import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'app/App.css';
import Header from 'components/Header';
import Signup from 'pages/Signup';
import Login from 'pages/Login';
import Home from 'pages/Home';

import { fetchBoard } from 'app/appSlice';
import { toggleListActions } from 'app/appSlice';
import { isNonEmptyObject } from 'helpers/dom';

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBoard());
  }, [dispatch]);

  const listActions = useSelector(state => state.app.listActions);
  const clearPopup = () => {
    if (isNonEmptyObject(listActions)) dispatch(toggleListActions());
  };

  return (
    <Root>
      <Router>
        <Header onClick={clearPopup} />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </Root>
  );
}
