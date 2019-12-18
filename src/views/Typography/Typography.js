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
// import CardAvatar from "components/Card/CardAvatar.js";
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

// export default function TypographyPage() {
class TypographyPage extends React.Component {
  state = {
    isLoading: true,
    books: [],
    error: null
  };
  componentDidMount() {
    this.setState({
      books: [
        {
          id: 1,
          name: "Pranjal",
          desc: "Are you up for the plan?"
        },
        {
          id: 2,
          name: "Pranjal",
          desc: "What do you like most?"
        },
        {
          id: 3,
          name: "Pranjal",
          desc: "Coming na?"
        }
      ],
      isLoading: false
    });
  }

  render() {
    const classes = useStyles();
    const { isLoading, books, error } = this.state;
    return (
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Book List</h4>
          <p className={classes.cardCategoryWhite}>
            This is the general template
          </p>
        </CardHeader>
        <CardBody>
          {error ? <p>{error.message}</p> : null}
          {!isLoading ? (
            books.map(book => {
              const { id, name, desc } = book;
              return (
                <div>
                  <Card>
                    <CardHeader>
                      <GridContainer>
                        <GridItem md={7}> </GridItem>
                        <GridItem md={2}>
                          <Button
                            color="primary"
                            style={{ marginTop: 10 }}
                            round
                          >
                            Return Now
                          </Button>
                        </GridItem>
                        <GridItem md={3}>
                          <DeleteIcon />
                        </GridItem>
                      </GridContainer>
                    </CardHeader>
                    <CardBody>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={2}>
                          <CardIcon>
                            <img
                              src={avatar}
                              alt="..."
                              height="140"
                              width="130"
                            />
                          </CardIcon>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={10}>
                          <GridContainer>
                            <GridItem xs={12} sm={12} md={2}>
                              <h6
                                align="left"
                                className={classes.cardCategoryRequest}
                              >
                                <b>Name: </b>{" "}
                              </h6>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4} align="left">
                              {" "}
                              {book.name}
                            </GridItem>
                          </GridContainer>
                          <GridContainer>
                            <GridItem xs={12} sm={12} md={2}>
                              <h6
                                align="left"
                                className={classes.cardCategoryRequest}
                              >
                                {" "}
                                <b>Description: </b>
                              </h6>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={9} align="left">
                              {book.desc}
                            </GridItem>
                          </GridContainer>
                        </GridItem>
                      </GridContainer>
                      <GridContainer>
                        <GridItem md={9}>
                          <h4 style={h4style} className={classes.cardTitle}>
                            Requested / Borrowed Book on 20 / 10 / 2019
                          </h4>
                        </GridItem>
                        <GridItem md={3}>
                          <Button
                            color="primary"
                            style={{ marginTop: 20 }}
                            round
                          >
                            Status
                          </Button>
                        </GridItem>
                      </GridContainer>
                    </CardBody>
                    <CardFooter>
                      <TabPanel />
                    </CardFooter>
                  </Card>
                </div>
              );
            })
          ) : (
            <h3>Loading...</h3>
          )}
        </CardBody>
      </Card>

      // 		< Card profile>
      // 			< CardHeader>
      // 				< GridContainer>
      // 					< GridItem md={ 7 }>					</GridItem>
      // 					< GridItem md={ 2 }>
      // 						< Button color="primary" style={ { marginTop: 10 } } round>Return Now
      // 						</Button>
      // 					</GridItem>
      // 					< GridItem md={ 3 }>
      // 						< DeleteIcon />
      // 					</GridItem>
      // 				</GridContainer>
      // 			</CardHeader>
      // 			< CardBody>
      // 				< GridContainer>
      // 					< GridItem xs={ 12 } sm={ 12 } md={ 2 }>
      // 						< CardIcon>
      // 							< img src={ avatar } alt="..." height="140" width="130" />
      //             </CardIcon>
      //           </ GridItem>
      //           < GridItem xs={ 12 } sm={ 12 } md={ 10 }>
      //             < GridContainer>
      //               < GridItem xs={ 12 } sm={ 12 } md={ 2 }>
      //                 < h6 align="left" className={ classes.cardCategoryRequest }>< b>Name:	</b>	</h6>
      //               </GridItem>
      //               < GridItem xs={ 12 } sm={ 12 } md={ 4 } align="left">Beyond the Scene
      //               </GridItem>
      //             </ GridContainer>
      //             < GridContainer>
      //               < GridItem xs={ 12 } sm={ 12 } md={ 2 }>
      //                 < h6 align="left" className={ classes.cardCategoryRequest }>	< b>Description:	</b></h6>
      //               </GridItem>
      //               < GridItem xs={ 12 } sm={ 12 } md={ 9 } align="left">Don { "'" } t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
      // 							</GridItem>
      //             </ GridContainer>
      // 					</GridItem>
      // 				</ GridContainer>
      //         < GridContainer>
      //           < GridItem md={ 9 }>
      //             < h4 style={ h4style } className={ classes.cardTitle }>Requested / Borrowed Book on 20 / 10 / 2019
      //               </h4>
      //           </ GridItem>
      //           < GridItem md={ 3 }>
      //             < Button color="primary" style={ { marginTop: 20 } } round>Status
      //             </Button>
      //           </ GridItem>
      //         </GridContainer>
      //       </CardBody>
      //       < CardFooter>
      //         < TabPanel />
      //       </CardFooter>
      //     </Card>
      //   </CardBody>
      // </Card>
    );
  }
}

export default TypographyPage;
