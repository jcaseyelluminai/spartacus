import React, { Fragment, useEffect } from "react";
import store from "../store";
import { withCookies } from "react-cookie";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Header from "./layout/Header";
import Home from "./chat/Home";
import Chat from "./chat/Chat";
import Alerts from "./layout/Alerts";
import Login from "./Accounts/Login";
import Register from "./Accounts/Register";
import PrivateRoute from "./common/PrivateRoute";
import { loadUser } from "../actions/auth";

const App = (props) => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Router>
      <Fragment>
        <Header />
        <Alerts />
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/agent" component={Chat} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default withCookies(App);
