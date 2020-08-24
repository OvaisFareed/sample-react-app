import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Button } from '@material-ui/core';

interface DialogProps {
    open: boolean;
    handleClose: (confirmDelete: boolean) => any;
    dialogTitle: string;
    dialogContent: string;
    cancelButtonText: 'Cancel' | 'No';
    okButtonText: 'Confirm' | 'OK' | 'Yes';
}

const CustomDialog: React.FC<DialogProps> = ({open, handleClose, dialogTitle, dialogContent, cancelButtonText, okButtonText}) => {

    return (
    <Dialog aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">{dialogTitle}</DialogTitle>
      <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogContent}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(true)} color={okButtonText === 'Confirm' ? "secondary" : "primary"} autoFocus>
            {okButtonText}
          </Button>
          <Button onClick={() => handleClose(false)} color="default">
            {cancelButtonText}
          </Button>
        </DialogActions>   
    </Dialog>
    );
}

export default CustomDialog;