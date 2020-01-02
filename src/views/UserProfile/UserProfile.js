import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import avatar from "assets/img/faces/marc.jpg";
import ActiveRequests from "components/UserPage/ActiveRequests.js";
import BooksRead from "components/UserPage/BooksRead.js";
import BooksOwned from "components/UserPage/BooksOwned.js";
import Profile from "components/UserPage/Profile.js";
import UpdateProfile from "./UpdateProfile";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};


const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={8}>
          <GridContainer>
            <ActiveRequests />
            <BooksRead />
            <BooksOwned />
          </GridContainer>
        </GridItem>
        <GridItem xs={4}>
            <Profile></Profile>
        </GridItem>
      </GridContainer>
    </div>
  );
}