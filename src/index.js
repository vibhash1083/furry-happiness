import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import HomeView from 'home.js';
import LoginTab from 'views/LoginTab.js';

// core components
import BooksListView from "views/Dashboard.js";

import { primaryBoxShadow } from "assets/jss/material-dashboard-react";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
    <Route path="/home" component={HomeView} />
    <Route path="/" component={LoginTab} />
      {/* <Route path="/" component={requireAuthentication(BasicExample)} /> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
