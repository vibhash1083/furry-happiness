import React from "react";
import PrimarySearchAppBar from 'components/BookDetailsComponents/AppBar.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AppBar } from "@material-ui/core";
import BookDetailsView from "views/BookDetails";
import UserProfile from "views/UserProfile/UserProfile.js";
import BooksListView from "views/Dashboard";
// import UserProfile from "views/UserProfile/UserProfile.js";
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
      <PrimarySearchAppBar />
        <Switch>
        <Route path="/book/:id" component={BookDetailsView} />
        <Route path="/user" component={UserProfile} />
          <Route exact path="/">
            <BooksListView />
          </Route>
          
          {/* <Route path="/dashboard">
            <Dashboard />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
