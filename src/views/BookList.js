import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer.js";
import Store from "@material-ui/icons/Store";
import CardIcon from "components/Card/CardIcon.js";
import Button from "components/CustomButtons/Button.js";
import StarRatingComponent from "react-star-rating-component";
import "react-star-rating/dist/css/react-star-rating.min.css";
import avatar from "assets/img/faces/marc.jpg";
import CardFooter from "components/Card/CardFooter";
import TabPanel from "components/Tab/Tab.js";
import DeleteIcon from "components/Icons/DeleteIcon";

const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
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
const h4style = {
  color: "black",
  backgroundColor: "#f7f5f7",
  padding: "5px",
  fontFamily: "Arial"
};

export default function BooksList() {
  const classes = useStyles();
  const status = "Available";
  const check = "Available";
  var books_objects = [
    {
      id: "1",
      name: "The hound",
      status: "Available",
      description: "this is sample description of book The hound"
    },
    {
      id: "2",
      name: "Baristar Parvatisham",
      status: "Available on 1/1/20",
      description: "this is sample description of book Baristar Parvatisham"
    },
    {
      id: "3",
      name: "smd book ",
      status: "Available on 12/12/20",
      description: "this is sample description of book smd book "
    },
    {
      id: "4",
      name: "dfash",
      status: "Available",
      description: "this is sample description of book prem simma"
    }
  ];

  return (
    <Card>
      <CardHeader color="primary">
        <br></br>
        <h4 className={classes.cardTitleWhite}>Books List</h4>
      </CardHeader>
      <CardBody>
        {books_objects.map(book_obj => (
          <Card profile>
            <CardBody>
              <GridContainer>
                <GridItem md={2}>
                  <CardIcon>
                    <img src={avatar} alt="..." height="140" width="130" />
                  </CardIcon>
                </GridItem>
                <GridItem md={7} align="left">
                  <h4>{book_obj.name}</h4>
                  <p>{book_obj.description}</p>
                  <h4>Requested / Borrowed Book on 20 / 10 / 2019</h4>
                </GridItem>
                <GridItem md={2}>
                  {  status=== "Available" ? 
                <DeleteIcon /> :
        <Button color="primary">Return Now </Button> }
                  
                  <Button color="success">{book_obj.status} </Button>
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <TabPanel />
            </CardFooter>
          </Card>
        ))}
      </CardBody>
    </Card>
  );
}