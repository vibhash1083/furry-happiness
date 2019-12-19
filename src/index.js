import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import BooksListView from "views/Dashboard.js";
import BookDetailsView from "views/BookDetails.js";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/book/:id" component={BookDetailsView} />
      <Route path="/" component={BooksListView} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
