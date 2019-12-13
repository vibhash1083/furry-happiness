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
            <GridItem xs={12}>
            <Card activerequests>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Active Requests</h4>
              </CardHeader>
              <CardBody activerequests>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={8}>
                    <p>Arjun</p>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <Button color="primary" round>Approve</Button>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={8}>
                    <p>Anirudh</p>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <Button color="primary" round>Approve</Button>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={8}>
                    <p>Akash</p>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <Button color="primary" round>Approve</Button>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={8}>
                    <p>Ajay</p>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <Button color="primary" round>Approve</Button>
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
            <GridItem xs={12}>
              <Card booksread>
                <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Books Read</h4>
            </CardHeader>
                <CardBody booksread>
              <GridContainer>
                <GridItem xs={6}>
                  <Card>
                    <CardHeader>
                      </CardHeader>
                        <CardBody>Hey</CardBody>
                      <CardFooter>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem xs={6}>
                  <Card>
                    <CardHeader>
                      </CardHeader>
                        <CardBody>Hey</CardBody>
                      <CardFooter>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem xs={6}>
                  <Card>
                    <CardHeader>
                      </CardHeader>
                        <CardBody>Hey</CardBody>
                      <CardFooter>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem xs={6}>
                  <Card>
                    <CardHeader>
                      </CardHeader>
                        <CardBody>Hey</CardBody>
                      <CardFooter>
                    </CardFooter>
                  </Card>
                </GridItem>
              </GridContainer>
            </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12}>
              <Card booksowned>
                <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Books Owned</h4>
            </CardHeader>
                <CardBody booksowned>
              <GridContainer>
                <GridItem xs={6}>
                  <Card>
                    <CardHeader>
                      </CardHeader>
                        <CardBody>Hey</CardBody>
                      <CardFooter>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem xs={6}>
                  <Card>
                    <CardHeader>
                      </CardHeader>
                        <CardBody>Hey</CardBody>
                      <CardFooter>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem xs={6}>
                  <Card>
                    <CardHeader>
                      </CardHeader>
                        <CardBody>Hey</CardBody>
                      <CardFooter>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem xs={6}>
                  <Card>
                    <CardHeader>
                      </CardHeader>
                        <CardBody>Hey</CardBody>
                      <CardFooter>
                    </CardFooter>
                  </Card>
                </GridItem>
              </GridContainer>
            </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem xs={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button color="primary" round>
                Update Profile
              </Button>
            </CardBody>
          </Card>
          </GridItem>
      </GridContainer>
    </div>
  );
}
