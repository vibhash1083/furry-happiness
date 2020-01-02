import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
import BooksList from "views/BookList.js";
import LoginTab from "views/LoginTab.js";

export default function HomeView() {
  return (
    <Router>
      <div>
      <PrimarySearchAppBar />
        <Switch>
        <Route path="/book/:id" component={BookDetailsView} />
        <Route path="/user" component={UserProfile} />
        <Route path="/home" component={BooksListView} />
        {/* <BooksListView />
        </Route> */}
        <Route path="/list">
        <BooksList />
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

// function Home() {
//   return (
//     <div>
//       <BooksListView />
//     </div>
//   );
// }
