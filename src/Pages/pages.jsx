import React from 'react';
import { Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid,Paper } from '@material-ui/core';
import { EditModal } from '../Components/Modals/EditModal/EditModal';
import { TextfielDescription } from '../Components/Texts/TextFieldCode/TextfieldCode'
import { DefinitionText } from '../Components/Texts/Definition/DefinitionText';

export const Pages =() => {
    const [ info, setInfo ] = React.useState({title:"", description:""});
    const [open, setOpen] = React.useState(false);

    const [openAlert, setopenAlert] =  React.useState(false)
      
    const handleOpenModela = (modal) => {
        setInfo({
            title: modal.title,
            description: modal.description,
            keys: modal.keys,
            button: modal.button
        })
        setOpen(true);
    }
    const handleClose = () => {
      setOpen(false);
    };

    const cerrrarModal = () => {
      setOpen(false)
    }
    const cerrrarModalAbrirAlerta = () => {
      setOpen(false)
      setopenAlert(true)
    }

    const handleCloseAlert = () => {
      setopenAlert(false)
    }
    
    const valuesPerModals = {
        addSection: {
          title: 'Agregar Seccion',
          description: 'xd1',
          keys: [
            {
                name: 'codeNewSecction',
                label: 'Codigo de la Nueva Seccion'
            },
            {
                name: 'nameNewSecction',
                label: 'Nombre de la Nueva Seccion'
            },
            {
                name: 'definitionNewSecction',
                label: 'Definicion de la Nueva Seccion'
            },
          ],
          button: () => cerrrarModal()
        },
        editSection: {
          title: 'Editar Seccion',
          description: 'xd2',
          keys: [
            {
                name: 'codeSecction',
                label: 'Codigo de la Seccion'
            },
            {
                name: 'nameSection',
                label: 'Nombre de la Seccion'
            },
            {
                name: 'descriptionSecction',
                label: 'Definicion de la Seccion'
            },
          ],
          button: () => cerrrarModalAbrirAlerta()
        },
        editDivision: {
          title: 'Editar Division',
          description: 'xd3',
          keys: [
            {
                name: '',
                label: ''
            },
            {
                name: '',
                label: ''
            },
            {
                name: '',
                label: ''
            },
          ]
        },
        editGroup: {
          title: 'Editar Grupo',
          description: 'xd4',
          keys: [
            {
                name: '',
                label: ''
            },
            {
                name: '',
                label: ''
            },
            {
                name: '',
                label: ''
            },
          ]
        },
        addClass: {
          title: 'Agregar Clase',
          description: 'xd5',
          keys: [
            {
                name: '',
                label: ''
            },
            {
                name: '',
                label: ''
            },
            {
                name: '',
                label: ''
            },
          ]
        },
        editClass: {
          title: 'Editar Clase',
          description: 'xd6',
          keys: [
            {
                name: '',
                label: ''
            },
            {
                name: '',
                label: ''
            },
            {
                name: '',
                label: ''
            },
          ]
        },
        definition: {
          title: 'Definicion',
          description: <DefinitionText />,
        }
    }
    return (
      <Paper style={{padding: 12}}>
        <Grid container>
          <Button variant="outlined" color="primary" onClick={() => handleOpenModela(valuesPerModals.addSection)}>
                  Agregar Seccion
          </Button>
          <Button variant="outlined" color="primary" onClick={() => handleOpenModela(valuesPerModals.editSection)}>
                  Editar Seccion
          </Button>
          <Button variant="outlined" color="primary" onClick={() => handleOpenModela(valuesPerModals.editDivision)}>
                  Editar Division
          </Button>
          <Button variant="outlined" color="primary" onClick={() => handleOpenModela(valuesPerModals.editGroup)}>
                  Editar Grupo 
          </Button>
          <Button variant="outlined" color="primary" onClick={() => handleOpenModela(valuesPerModals.editClass)}>
                  Editar Clase
          </Button>
          <Button variant="outlined" color="primary" onClick={() => handleOpenModela(valuesPerModals.addClass)}>
                  Agregar Clase 
          </Button>
          <Button variant="outlined" color="primary" onClick={() => handleOpenModela(valuesPerModals.definition)}>
                Definicion 
          </Button>
        </Grid>

        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            {info.title} 
            {' '}
            {/* {info.icon} */}
          </DialogTitle>
          <DialogContent dividers>
            {info.description}
            <Divider light />
            <TextfielDescription  keys={info.keys} setInfo={setInfo} info={info} />
          </DialogContent>
          <DialogActions>
          <Button autoFocus onClick={info.button} color="primary">
              Save changes
          </Button>
          </DialogActions>
        </Dialog>
        <Dialog onClose={() => handleCloseAlert(false)} aria-labelledby="customized-dialog-title" open={openAlert}>
        <DialogTitle id="customized-dialog-title" onClose={() => handleCloseAlert(false)}>
          Edotado exitosamente
        </DialogTitle>
        <DialogActions>
          <Button autoFocus onClick={() => handleCloseAlert(false)} color="primary">
            Finalizar
          </Button>
        </DialogActions>
      </Dialog>
      </Paper>
    )
}
