import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import BooksListView from "views/Dashboard.js";
import BookDetailsView from "views/BookDetails.js";
import PrimarySearchAppBar from "components/BookDetailsComponents/AppBar.js";

export default function HomeView() {
  return (
    <Router>
      <div>
        <PrimarySearchAppBar />
        <Switch>
          <Route path="/book/:id" component={BookDetailsView} />
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <BooksListView />
    </div>
  );
}
