import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import BooksListView from "views/Dashboard.js";

import BasicExample from "views/Home.js";

import { primaryBoxShadow } from "assets/jss/material-dashboard-react";


const hist = createBrowserHistory();

ReactDOM.render(
  <div>
  
  <Router history={hist}>
    
    <Switch>
      
      {/* <Route path="/" component={BooksListView} />   */}
      <Route path="/" component={BasicExample}/>
    </Switch>
  </Router>
  </div>,
  document.getElementById("root")
);
