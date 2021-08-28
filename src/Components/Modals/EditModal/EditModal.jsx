import React from 'react';
import './EditModal.css'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { EditTitle } from '../../Tittles/Edit/EditTitle';
import DialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import { CancelButton } from '../../Buttons/CancelButton/Cancel';
import { withStyles } from '@material-ui/core';
import { GridTextField } from '../../Texts/GridTextField/GridTextField';
import { SaveModal } from '../EditSaveModal/EditsaveModal';

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


export const EditModal=() => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button onClick={handleClickOpen} variant="outlined" color="primary">
        Modal de Editar
      </Button>
      <EditDialog fullWidth onClose={handleClose} open={open}>
        <EditTitle/>
      <GridTextField/>
        <ActionsDialog>
            <CancelButton autoFocus onClick={handleClose}>
            <span>
                    <CloseIcon/>
                </span>
                <span>
                    <p>CANCELAR</p>
            </span>
            </CancelButton>   
            <SaveModal autoFocus onClick={handleClose}/>
        </ActionsDialog>
      </EditDialog>
    </div>
  );
}