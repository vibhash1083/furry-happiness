import React from "react";

import { fade, makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "components/Card/Card.js";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardBody from "components/Card/CardBody.js";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CustomizedPopup from "components/BookDetailsComponents/BDpopup.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(theme => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px"
  },
  box: {
    paddingTop: "1%"
  },
  card: {
    maxWidth: "100%",
  },
 
  media: {
    height: 275,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },

  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  desc : {
   fontSize:"140%",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

export default function BookDetailsView(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const bname = "The Great Gatsby", author = "Vibhash Chandra";

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Container>
      {/* <PrimarySearchAppBar /> */}
      <Typography variant="h6" component="h2">
        Single Book
      </Typography>
        <GridContainer>
          <Card className={classes.card}>
            <CardHeader 
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  T
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="The Great Gatsby"
              subheader="September 14, 2016"
            />
            <GridContainer spacing="1">
            <GridItem xs="12" sm="2" md="2" >
              {/* <CardMedia
                className={classes.media}
                image="https://images-na.ssl-images-amazon.com/images/I/41beWU7rn8L._SX322_BO1,204,203,200_.jpg"
                title="Lolita"
              /> */}
              <img width = "100%" src = "https://images-na.ssl-images-amazon.com/images/I/41iers%2BHLSL._SX326_BO1,204,203,200_.jpg" />
            </GridItem>
            <GridItem xs="12" sm="10" md="10" >
              {/* <CardContent> */}
                <GridContainer >
                      <GridItem  xs="12" sm="3" md= "2">
                  <p className={classes.desc}><b>Name : </b></p>
                      </GridItem>
                      <GridItem xs="12" sm="9" md= "10">
                        <p className={classes.desc}>{bname}</p>
                      </GridItem>
                      
                      <GridItem  xs="12" sm="3" md= "2">
                  <p className={classes.desc}><b>Author : </b></p>
                      </GridItem>
                      <GridItem xs="12" sm="9" md= "10">
                        <p className={classes.desc}>{author}</p>
                      </GridItem>
                      {/* <GridItem   xs="12" sm="9" md= "10" >
                  <p></p>
                      </GridItem> */}
                      </GridContainer>

                {/* <Typography variant="body2" color="textSecondary" component="p">
                  Owner: Vibhash Chandra
                </Typography> */}



              {/* </CardContent> */}
            </GridItem>
            </GridContainer>
            <CardActions disableSpacing>
              <CustomizedPopup bid="1" />
              {/* <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton> */}
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <FullscreenIcon />
              </IconButton>
            </CardActions>
          </Card>
        </GridContainer>
    </Container>
  );
}
