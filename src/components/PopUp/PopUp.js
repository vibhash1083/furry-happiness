import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = value => {
    onClose(value);
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Approve Request</DialogTitle>
      <DialogContent>
          <DialogContentText>
              <List>
                  <ListItem>
                      <ListItemText primary="Book ID :1235" />
                  </ListItem>
                  <ListItem>
                  <ListItemText primary="Book Req Date :12/12/2020" />
                  </ListItem>
              </List>
          </DialogContentText>
          <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Comments"
              type="text"
              fullWidth
          />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleListItemClick("Rejected")} color="secondary">
          Reject
        </Button>
        <Button onClick={() => handleListItemClick("Approved")} color="primary">
          Approve
        </Button>
      </DialogActions>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};