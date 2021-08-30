import React from 'react';
import './pages.css';
import {  Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid,Paper, withStyles, } from '@material-ui/core';
import { TextfielDescription } from '../Components/Texts/TextFieldCode/TextfieldCode'
import { DefinitionText } from '../Components/Texts/Definition/DefinitionText';
import { AcceptButton } from '../Components/Buttons/AcceptButton/Accept';
import { CancelButton } from '../Components/Buttons/CancelButton/Cancel';
import { SaveIconB } from '../Components/Icons/Icons';

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
        padding: "1%",
        paddingTop: 0,
        borderRadius: 16,
      },
      '& .MuiOutlinedInput-multiline': {
        padding: '1%',
        margin: '2%',
      }, '& .MuiGrid-spacing-xs-5 .MuiGrid-item': {
        padding: '7%'
      }
      },    
  },
)(Dialog); 
const GridField = withStyles({
  root: {
      '& .MuiGrid-item': {
          display: 'grid',
          width: "80%",
      },
      },    
  },
)(Grid);

export const Pages =() => {
    const [ info, setInfo ] = React.useState({title:"", description:""});
    const [open, setOpen] = React.useState(false);

    const [openAlert, setopenAlert] =  React.useState(false)
      
    const handleOpenModela = (modal) => {
        setInfo({
            title: modal.title,
            description: modal.description,
            keys: modal.keys,
            buttonAccept: modal.buttonAccept,
            buttonOpen: modal.buttonOpen,
            buttonOpenText: modal.buttonOpenText, 
            buttonClose: modal.buttonClose,
            buttonCloseText: modal.buttonCloseText,
            success: modal.success,
            error: modal.error,
            desciptionAlert: modal.desciptionAlert,
            saveIcon: modal.saveIcon,
        })
        setOpen(true);
    }
    const handleClose = () => {
      setOpen(false);
    };

    const cerrrarModalAbrirAlerta = () => {
      setOpen(true)
      setopenAlert(true)
    }

    const handleCloseAlert = () => {
      setopenAlert(false)
      setOpen(false)
    }
    const valuesPerModals = {
        addSection: {
          title: 'Agregar Seccion',
          description: 'Por favor diligencia la siguiente información completando los campos obligatorios(*).',
          saveIcon: <SaveIconB/>,
          buttonOpenText: 'GUARDAR',
          buttonCloseText: 'CANCELAR',
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
          buttonOpen: () => cerrrarModalAbrirAlerta(),
          buttonClose: () => handleClose(),  
          success: 'Sección creada exitosamente'
        },
        editSection: {
          title: 'Editar Seccion',
          buttonOpenText: 'GUARDAR',
          buttonCloseText: 'CANCELAR',
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
          buttonOpen: () => cerrrarModalAbrirAlerta(),
          buttonClose: () => handleClose(),
          success: 'Sección editada exitosamente'      
        },
        editDivision: {
          title: 'Editar Division',
          buttonOpenText: 'GUARDAR',
          buttonCloseText: 'CANCELAR',
          keys: [
            {
                name: 'codeDivision',
                label: 'Codigo de la División'
            },
            {
                name: 'nameDivision',
                label: 'Nombre de la División'
            },
            {
                name: 'descriptionDivision',
                label: 'Definicion de la División'
            },
          ],
          buttonOpen: () => cerrrarModalAbrirAlerta(),
          buttonClose: () => handleClose(),   
          success: 'División editada exitosamente'   
        },
        editGroup: {
          title: 'Editar Grupo',
          buttonOpenText: 'GUARDAR',
          buttonCloseText: 'CANCELAR',
          keys: [
            {
                name: 'codeGroup',
                label: 'Codigo del Grupo'
            },
            {
                name: 'nameGroup',
                label: 'Nombre del Grupo'
            },
            {
                name: 'descriptionGroup',
                label: 'Definicion del Grupo'
            },
          ],
          buttonOpen: () => cerrrarModalAbrirAlerta(),
          buttonClose: () => handleClose(),
          success: 'Grupo editado exitosamente'      
        },
        addClass: {
          title: 'Agregar Clase',
          buttonOpenText: 'GUARDAR',
          buttonCloseText: 'CANCELAR',
          description: 'Por favor diligencia la siguiente información completando los campos obligatorios(*).',
          keys: [
            {
                name: 'codeNewClass',
                label: 'Codigo de la Nueva clase'
            },
            {
                name: 'nameNewClass',
                label: 'Nombre de la Nueva clase'
            },
            {
                name: 'definitionNewClass',
                label: 'Definicion de la Nueva clase'
            },
          ],
          buttonOpen: () => cerrrarModalAbrirAlerta(),
          buttonClose: () => handleClose(),
          success: 'Clase creada exitosamente'      
        },
        editClass: {
          title: 'Editar Clase',
          buttonOpenText: 'GUARDAR',
          buttonCloseText: 'CANCELAR',
          keys: [
            {
                name: 'codeClass',
                label: 'Codigo del Grupo'
            },
            {
                name: 'nameClass',
                label: 'Nombre del Grupo'
            },
            {
                name: 'descriptionClass',
                label: 'Definicion del Grupo'
            },
          ],
          buttonOpen: () => cerrrarModalAbrirAlerta(),
          buttonClose: () => handleClose(),
          success: 'Clase editada exitosamente' 
        },
        definition: {
          title: 'Definicion',
          buttonOpenText: 'ACEPTAR',
          description: <DefinitionText />,
          buttonAccept: () => handleClose()   
        },
        delete: {
          buttonOpenText: 'ACEPTAR',
          buttonCloseText: 'CANCELAR',
          title: '¿Eliminar concepto?',
          description: '¿Está seguro que desea eliminar este concepto?',
          desciptionAlert: 'Si el concepto tiene conceptos relacionados en niveles inferiores o transacciones de ingresos, egresos o solicitudes de pago activas, no puede ser eliminado.',
          success: 'Concepto eliminado exitosamente',
          error: 'Este concepto no se puede eliminar',
          buttonOpen: () => cerrrarModalAbrirAlerta(),
          buttonClose: () => handleClose(),
        }
    }
    return (
      <Paper style={{padding: 12}}>
        <Grid container>
        <AcceptButton variant="outlined" color="primary" onClick={() => handleOpenModela(valuesPerModals.definition)}>
                Definicion 
          </AcceptButton>
          <AcceptButton variant="outlined" color="primary" onClick={() => handleOpenModela(valuesPerModals.addSection)}>
                  Agregar Seccion
          </AcceptButton>
          <AcceptButton variant="outlined" color="primary" onClick={() => handleOpenModela(valuesPerModals.addClass)}>
                  Agregar Clase 
          </AcceptButton>
          <AcceptButton variant="outlined" color="primary" onClick={() => handleOpenModela(valuesPerModals.editSection)}>
                  Editar Seccion
          </AcceptButton>
          <AcceptButton variant="outlined" color="primary" onClick={() => handleOpenModela(valuesPerModals.editDivision)}>
                  Editar Division
          </AcceptButton>
          <AcceptButton variant="outlined" color="primary" onClick={() => handleOpenModela(valuesPerModals.editGroup)}>
                  Editar Grupo 
          </AcceptButton>
          <AcceptButton variant="outlined" color="primary" onClick={() => handleOpenModela(valuesPerModals.editClass)}>
                  Editar Clase
          </AcceptButton>
          <AcceptButton variant="outlined" color="primary" onClick={() => handleOpenModela(valuesPerModals.delete)}>
                  Eliminar 
          </AcceptButton>
        </Grid>

        <EditDialog fullWidth onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            <span>{info.title} {' '}</span>
            {info.saveIcon}
          </DialogTitle>
          <DialogContent dividers>
            {info.description}
            <Divider light />
            <GridField container alignItems="center" direction={"column"} spacing={5}>
            <Grid item >
              <TextfielDescription  keys={info.keys} setInfo={setInfo} info={info} />
            </Grid>
            </GridField>
          </DialogContent>
          <ActionsDialog>
          <CancelButton color="primary" variant="outlined" color="default" onClick={info.buttonClose}>
              {info.buttonCloseText}
          </CancelButton>
          <AcceptButton autoFocus onClick={info.buttonOpen || info.buttonAccept} color="success" variant="outlined" >
              {info.buttonOpenText}
          </AcceptButton>
          </ActionsDialog>
        </EditDialog>
        <Dialog onClose={() => handleCloseAlert(false)} aria-labelledby="customized-dialog-title" open={openAlert}>
        <DialogTitle id="customized-dialog-title" onClose={() => handleCloseAlert(false)}>
          {info.success || info.error}
        </DialogTitle>
        <DialogContent>
        {info.desciptionAlert}
        </DialogContent>
        <DialogActions>
          <AcceptButton autoFocus onClick={() => handleCloseAlert(false)}  variant="outlined" color="success">
            FINALIZAR
          </AcceptButton>
        </DialogActions>
      </Dialog>
      </Paper>
    )
}
