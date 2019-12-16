import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


export default function SimpleDialogDemo() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState("Expand");
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = value => {
      setOpen(false);
      setSelectedValue(value);
    };
  
    return (
      <div>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          {selectedValue}
        </Button>
        <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
      </div>
    );
  }
  