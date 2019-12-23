import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrimarySearchAppBar from 'components/BookDetailsComponents/AppBar.js';

import { AppBar } from "@material-ui/core";
import BookDetailsView from "views/BookDetails";
import UserProfile from "views/UserProfile/UserProfile.js";
import BooksListView from "views/Dashboard";



export default function HomeView() {
  return (
    <Router>
      <div>
        <PrimarySearchAppBar />
        <Switch>
          <Route path="/book/:id" component={BookDetailsView} />
        <Route path="/book/:id" component={BookDetailsView} />
        <Route path="/user" component={UserProfile} />
          <Route exact path="/">
            <BooksListView />
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
