import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import BooksListView from "views/Dashboard";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={BooksListView} />
      <Redirect from="/" to="/home" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
