import React from "react";

import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import GridContainer from "components/Grid/GridContainer.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { makeStyles } from "@material-ui/core/styles";
import BookCards from "./BookCards";

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

export default function BooksOwned(){
    const classes = useStyles();
      return (
        <React.Fragment>
             <GridItem xs={12}>
              <Card booksowned>
                <CardHeader color="primary">
                    <h4 className={classes.cardTitleWhite}>Books Owned</h4>
                </CardHeader>
                <CardBody booksowned>
                <GridContainer>
                    <BookCards/>
                    <BookCards/>
                    <BookCards/>
                </GridContainer>
            </CardBody>
              </Card>
            </GridItem>
        </React.Fragment>
        );
    }