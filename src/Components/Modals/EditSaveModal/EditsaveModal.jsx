import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { AcceptButton } from '../../Buttons/AcceptButton/Accept';
import SaveIcon from '@material-ui/icons/Save';
import DialogActions from '@material-ui/core/DialogActions';
import CheckIcon from '@material-ui/icons/Check';
import { SaveText } from '../../Texts/SaveText/SaveText';
import { withStyles } from '@material-ui/core';

const ActionsDialog = withStyles({
  root: {
      display: 'flex',
      padding: 8,
      alignItems: 'center',
      justifyContent: 'space-around',
      },    
  },
)(DialogActions);

const EditDialog = withStyles({
  root: {
      '& .MuiDialog-paperFullWidth': {
        width: "100%",
        padding: "2%",
        paddingTop: 0,
        borderRadius: 16,
      }
      },    
  },
)(Dialog);  


export const SaveModal=() => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AcceptButton onClick={handleClickOpen} variant="outlined" color="success">
        <span>
          <SaveIcon/>
        </span>
        <span>
          <p>GUARDAR</p>
        </span>
      </AcceptButton>
      <EditDialog onClose={handleClose} open={open} fullWidth>
        <SaveText/>
        <ActionsDialog>
        <AcceptButton autoFocus onClick={handleClose} variant="outlined" color="success">
            <span>
                <CheckIcon/>
            </span>
            <span>
                <p>FINALIZAR</p>
            </span>
        </AcceptButton>
        </ActionsDialog>
      </EditDialog>
    </div>
  );
}