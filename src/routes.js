/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// core components/views for Admin layout
// import DashboardPage from "views/Dashboard/Dashboard.js";
// import UserProfile from "views/UserProfile/UserProfile.js";
import PrimarySearchAppBar from 'components/BookDetailsComponents/AppBar.js';

const dashboardRoutes = [
  {
    path: "/home",
    name: "Home",
    // icon: Dashboard,
    component: PrimarySearchAppBar,
    layout: "/"
  }
//   ,
//   {
//     path: "/user",
//     name: "User Profile",
//     icon: Person,
//     component: UserProfile,
//     layout: "/admin"
//   }
];

export default dashboardRoutes;
