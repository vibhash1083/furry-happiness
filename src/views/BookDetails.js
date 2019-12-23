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
import StarRatingComponent from 'react-star-rating-component';
import 'react-star-rating/dist/css/react-star-rating.min.css';
import SimpleRating from "components/BookDetailsComponents/rating.js";


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
 a_size_large:{
  fontsize: "21px",

 },
 a_size_medium:{
  fontsize: "17px",

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
   fontSize:"120%",
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
  const bdesc = "A true classic of twentieth-century literature, this edition has been updated by Fitzgerald scholar James L.W. West III to include the author’s final revisions and features a note on the composition and text, a personal foreword by Fitzgerald’s granddaughter, Eleanor Lanahan—and a new introduction by two-time National Book Award winner Jesmyn Ward.";
  const sdesc = "The Great Gatsby, F. Scott Fitzgerald’s third book, stands as the supreme achievement of his career. First published in 1925, this quintessential novel of the Jazz Age has been acclaimed by generations of readers. The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted “gin was the national drink and sex the national obsession,” it is an exquisitely crafted tale of America in the 1920s.";
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
        <GridContainer spacing="1" padding="0">
        
            <GridItem xs="12" sm="3" md="3" >
              <img width = "100%" src = "https://images-na.ssl-images-amazon.com/images/I/41iers%2BHLSL._SX326_BO1,204,203,200_.jpg" />
            </GridItem>
            <GridItem padding="0"  xs="12" sm="7" md="7">
              
                      <h1>{bname}</h1>
                      <p>by <b>{author}</b></p>
                      <SimpleRating val ="3.7" />
                      
{/* <StarRatingComponent 
          name="rate2" 
          editing={false}
          starDimension="20px"
          starCount={5}
          value={3.5}
        /> */}
                      <hr />
                      <br />
                      <p><b>{bdesc}</b></p>
                      <br />
                      <p>{sdesc}</p>

              

                {/* <Typography variant="body2" color="textSecondary" component="p">
                  Owner: Vibhash Chandra
                </Typography> */}



              {/* </CardContent> */}
            </GridItem >
            <GridItem align="center" xs="12" sm="2" md="2">
              <CustomizedPopup bid="1" />
              <p>OWNER:<br /><b>PRANJAL Rising Star</b></p>
              <p>OWNER:<br /><b>PRANJAL Rising Star</b></p>
              
              
              </GridItem> 
            </GridContainer>
            <CardActions disableSpacing>
           
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
              </IconButton>
            </CardActions>


    </Container>
  );
}
