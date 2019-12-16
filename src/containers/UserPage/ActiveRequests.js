import React from "react";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Approval from "./Approval.js"
import { makeStyles } from "@material-ui/core/styles";

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

export default function ActiveRequests(){
    const classes = useStyles();
      return (
        <React.Fragment>
            <GridItem xs={12}>
            <Card activerequests>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Active Requests</h4>
              </CardHeader>
              <CardBody activerequests>
                <GridContainer>
                  <Approval name={"David"} />
                  <Approval name={"Warner"} />
                  <Approval name={"Root"} />
                  <Approval name={"Maxwell"} />
                  <Approval name={"Finch"} />
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        </React.Fragment>
        );
  }
  