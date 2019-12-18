import React from "react";
import StarRatingComponent from 'react-star-rating-component';
import 'react-star-rating/dist/css/react-star-rating.min.css';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';


// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import CardAvatar from "components/Card/CardAvatar.js";

// import tileData from './tileData.js'

import ScrollMenu from 'react-horizontal-scrolling-menu';
// import mobiscroll from '@mobiscroll/react';
// import '@mobiscroll/react/dist/css/mobiscroll.min.css';

import avatar from "assets/img/faces/marc.jpg";
import { bugs, website, server } from "variables/general.js";

import TileData from './tileData.js';


import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  const { rating } = 4;
  
  return (
    <div>
      {/* Disp
      <TileData />
      Disp1 */}
      

<div className="box-header with-border">
      <h3 className="box-title">Fiction</h3>
      <hr></hr>
  </div>
  <div>
      <GridContainer>
      <GridItem xs={12} sm={12} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Haruki Murakami</p>
            
            </CardHeader>
            <CardBody profile>
        
              <h4 className={classes.cardTitle}>Kafka on the shore</h4>
              <StarRatingComponent 
          name="rate2" 
          editing={false}
          starDimension="20px"
          starCount={5}
          value={4}
        />
              <p className={classes.description}>
                Don{"'"}t be scared of the truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button color="primary" round>
                Details
              </Button>
            </CardBody>
            
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Haruki Murakami</p>
            
            </CardHeader>
            <CardBody profile>
            {/* <h2> {rating}</h2> */}
        
              <h4 className={classes.cardTitle}>Kafka on the shore</h4>
              <StarRatingComponent 
          name="rate2" 
          editing={false}
          starDimension="20px"
          // renderStarIcon={() => <span></span>}
          starCount={5}
          value={4}
        />
              <p className={classes.description}>
                Don{"'"}t be scared of the truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button color="primary" round>
                Details
              </Button>
            </CardBody>
            
          </Card>
        </GridItem>

      </GridContainer>
</div>        

      <div className="box-header with-border">
      <h3 className="box-title">Biography</h3>
      <hr></hr>
  </div>
  <GridContainer>
      <GridItem xs={12} sm={12} md={4}>
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
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
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
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
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
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      
    </div>
  );
}
