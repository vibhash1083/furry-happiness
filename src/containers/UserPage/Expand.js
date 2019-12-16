import React from 'react';
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

export default function Expand() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button variant="contained" color="primary" round onClick={handleClickOpen}>
        Expand
      </Button>
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
          <Button onClick={handleClose} color="secondary">
            Reject
          </Button>
          <Button onClick={handleClose} color="primary">
            Approve
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
