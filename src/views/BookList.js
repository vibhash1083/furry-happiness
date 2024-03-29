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
import useFetchBooks from "../getBookUtils.js";


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
  const {books,error,loading}= useFetchBooks();
  const user_id = "1";

  return (
    <Card>
      <CardHeader color="primary">
        <br></br>
        <h4 className={classes.cardTitleWhite}>Books List</h4>
      </CardHeader>
      <CardBody>
        {books.map(book_obj => (
          <Card profile>
            <CardBody>
              <GridContainer>
                <GridItem md={2}>
                  <CardIcon>
                    <img src={book_obj.bookImage} alt="..." height="140" width="130" />
                  </CardIcon>
                </GridItem>
                <GridItem md={7} align="left">
                  <h4>{book_obj.bookName}</h4>
                  <p>{book_obj.bookDescription} </p>
                  { user_id == 2  ? <h4>Requested Book on 20 / 10 / 2019</h4> : <h4>Borrowed Book on 20 / 10 / 2019 </h4> }
                </GridItem>
                <GridItem md={2}>
                  {  book_obj.bookStatus == "AVAILABLE" ? <DeleteIcon /> : <Button color="primary">Return Now </Button> }
                  <Button color="success">{book_obj.bookStatus}  </Button>
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