import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import React from 'react';
import { DefinitionModal } from '../Components/Modals/DefinitionModal/DefinitionModal';
import { EditModal } from '../Components/Modals/EditModal/EditModal';

export const Pages =() => {
    const [ info, setInfo ] = React.useState({title:"", description:""});
        const [open, setOpen] = React.useState(false);
      
        const handleClickOpen = () => {
          setOpen(true);
        };
        const handleClose = () => {
          setOpen(false);
        };
    return (
        <Box>
            <DefinitionModal/>
            <EditModal/>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    Open dialog
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {info.title}
                    </DialogTitle>
                    <DialogContent dividers>
                    {info.description}
                    </DialogContent>
                    <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Save changes
                    </Button>
                    </DialogActions>
            </Dialog>
        </Box>
    )
}
