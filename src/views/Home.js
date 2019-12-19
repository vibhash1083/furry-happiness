import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import BooksListView from "views/Dashboard.js";
import BookDetailsView from "views/BookDetails.js";
import  PrimarySearchAppBar  from "components/BookDetailsComponents/AppBar.js"
import { primaryBoxShadow } from "assets/jss/material-dashboard-react";
import { func } from "prop-types";


// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return(
   
      
      
    <Router>
       

    <div>
        
<Bar />
            <Link to="/"></Link>
         
            <Link to="/about"></Link>
        
            <Link to="/dashboard"></Link>
   
        

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        
        <Switch>
        <Route path="/book/:id" component={BookDetailsView} />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
        
 </div>
 
    </Router>
 

  );
}

// You can think of these components as "pages"
// in your app.
function Bar()
{
    return(

    <PrimarySearchAppBar></PrimarySearchAppBar>
            
    );
}
function Home() {
  return (

    <div>
        
      <BooksListView />
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
