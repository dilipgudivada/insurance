import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import Login from './Login';

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog(props) {

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >

        <DialogContent>

          {props.signin ? <div>
            <Login handleClose={handleClose}/></div> : <div>This page is under construction</div>}
        </DialogContent>
        {!props.signin &&
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>}
      </Dialog>
    </div>
  );
}
