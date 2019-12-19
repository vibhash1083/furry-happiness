import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';


// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
// import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import DateTimePicker from "components/BookDetailsComponents/DateTimePicker.js"


import avatar from "assets/img/faces/marc.jpg";
import { KeyboardDatePicker } from '@material-ui/pickers';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


const useStyles = makeStyles(styles);

export default function CustomizedPopup(props) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const {bid}=props;

  const name = "yo",genre = "Horror" , author = "Govardhana" , rating = 4.8, avalDate = "19-12-2019";
  const available = "Available";
  const handleClickOpen = () => {
      console.log("Text in pop up:",name)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Request Book
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Request : <strong>{name}</strong>
        </DialogTitle>
        <DialogContent dividers>

        <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
          <CardAvatar profile>
                <img src={avatar} alt="..." />
            </CardAvatar>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Request confirmation</h4>
              <p className={classes.cardCategoryWhite}>Enter the following details</p>
            </CardHeader>
            <CardBody>
              {/* <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                <h4 className={classes.cardTitleWhite}><strong>Genre : </strong>{genre} </h4>
              
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                <h4 className={classes.cardTitleWhite}><strong>Rating : </strong>{rating} </h4>
              
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                <h4 className={classes.cardTitleWhite}><strong>Author : </strong>{author} </h4>
              
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                <h4 className={classes.cardTitleWhite}><strong>{available} : </strong>{avalDate} </h4>
              
                </GridItem>
              </GridContainer> */}
              
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Emp ID"
                    id="EmpId"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Name"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Email ID"
                    id="emailid"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Desk Location"
                    id="deskLocation"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>         

                <GridItem xs={12} sm={12} md={12}>
                <DateTimePicker />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                    labelText="Comments"
                    id="about-me"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                    }}
                  />
                </GridItem>
               
              </GridContainer>

            </CardBody>
          </Card>
        </GridItem>
        
      </GridContainer>
          





          <Typography>yo
              {bid}
              yo
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleConfirm} color="primary">
            Confirm Request
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}