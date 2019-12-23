import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import CardAvatar from "components/Card/CardAvatar.js";
import 'react-star-rating/dist/css/react-star-rating.min.css';
import avatar from "assets/img/faces/marc.jpg";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles(styles);

export default function RequestBook(){
    
    const classes = useStyles();  
    var request_object=[
        {name : 'Anushka', email : 'Awesome@gmail.com',empid:'110191',time:'092929'},
        {name : 'Pranjal', email : 'Awesome@gmail.com',empid:'110191',time:'092929'},];
    const mystyle = {
        color: "white",
        backgroundColor: "#be03fc",
        padding: "10px",
        fontFamily: "Arial"
      };  
      const h4style = {
        color: "black",
        backgroundColor: "#f7f5f7",
        padding: "5px",
        fontFamily: "Arial",
        
      }; 

    return(
        <div>
            <GridContainer>  
            <GridItem xs={12} sm={12} >
        <Card profile>
        
        {/* <h3 h1 style={mystyle} className={classes.cardTitle}>Request to Give Book</h3>
        <GridContainer> 
                <GridItem xs={12} sm={12} md={2}>
                <CardIcon  >
              <img  src={avatar} alt="..."  height="140" width="130" />
              </CardIcon>
                </GridItem>
                
                <GridItem xs={12} sm={12} md={10}>
                    <br/>
                <GridContainer >
                    <GridItem xs={12} sm={12} md={2}>
                    <h6 align = "left"  className={classes.cardCategoryRequest}><b>Name        : </b></h6>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={10} align="left">
                    Beyond the Scene      
                       </GridItem>
        </GridContainer>

                <GridContainer>
                    <GridItem xs={12} sm={12} md={2}>
                    <h6 align="left" className={classes.cardCategoryRequest}><b>Description :  </b></h6>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={9} align="left">
                       Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
                </GridItem>
                </GridContainer>
                </GridItem>
            </GridContainer> */} 

             {/* <GridContainer>
                <GridItem xs={12} sm={12} md={10}></GridItem>
                <GridItem xs={12} sm={12} md={2}>
                   <Button style={{backgroungcolor:"green"}}>Available</Button>
                </GridItem>
            </GridContainer> */}
             {request_object.map((req_obj) =>
            <CardBody profile>
                            <h4 h1 style={h4style} className={classes.cardTitle}>Requested to take Book on 20/10/2019</h4>
            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                <b>Name     : </b>  {req_obj.name}
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                <b>Email     : </b>  Anushka@gmail.com
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                <b>Employee Id     : </b>  304223
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                <b>Time     : </b>  Sorry Busy!!
                </GridItem>
            </GridContainer>
              
            <br></br>
            <GridContainer>
                <GridItem xs={12} sm={12} md={7} align="left">
                <Button color="success">Available</Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                <Button color="primary" round>
                Accept Request
              </Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <Button color="primary" round>
                Decline with message
              </Button>
                </GridItem>
            </GridContainer>
        
             
            </CardBody>
              )}
          </Card>
        </GridItem>
        </GridContainer>
        </div>
    )
}