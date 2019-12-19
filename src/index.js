import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import BasicExample from 'home.js';

// core components
import BooksListView from "views/Dashboard.js";
import BookDetailsView from "views/BookDetails.js";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={BasicExample} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
