import React from "react";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

export default class BookCards extends React.Component{
  render(){
    return (
      <React.Fragment>
        <GridItem xs={6}>
          <Card>
              <CardHeader>
              </CardHeader>
              <CardBody>Hey</CardBody>
              <CardFooter>
              </CardFooter>
          </Card>
        </GridItem>
      </React.Fragment>
    );
  }
}