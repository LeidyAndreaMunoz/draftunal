import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { DefinitionTitle } from '../../Tittles/Definition/DefinitionTitle';
import { DefinitionText } from '../../Texts/Definition/DefinitionText';
import { AcceptButton } from '../../Buttons/AcceptButton/Accept';
import DialogActions from '@material-ui/core/DialogActions';
import CheckIcon from '@material-ui/icons/Check';

export const DefinitionModal=() => {
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
        Modal de Definición
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DefinitionTitle/>
        <DefinitionText/>
        <DialogActions>
        <AcceptButton autoFocus onClick={handleClose}>
            <span>
                <CheckIcon/>
            </span>
            <span>
                <p>ACEPTAR</p>
            </span>
        </AcceptButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}