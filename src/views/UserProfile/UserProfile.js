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

import avatar from "assets/img/faces/marc.jpg";
import ActiveRequests from "containers/UserPage/ActiveRequests.js";
import BooksRead from "containers/UserPage/BooksRead.js";
import BooksOwned from "containers/UserPage/BooksOwned.js";
import Profile from "containers/UserPage/Profile.js";


export default function UserProfile() {
  return (
    <div>
      <GridContainer>
        <GridItem xs={8}>
          <GridContainer>
            <ActiveRequests></ActiveRequests>
            <BooksRead></BooksRead>
            <BooksOwned></BooksOwned>
          </GridContainer>
        </GridItem>
        <GridItem xs={4}>
          <Profile></Profile>
        </GridItem>
      </GridContainer>
    </div>
  );
}
