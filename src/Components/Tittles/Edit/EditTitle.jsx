import React from 'react';
import './EditTitle.css';
import EditIcon from '@material-ui/icons/Edit';

export const EditTitle =() => {
    return(
        <div className="editTitle">
            <span>
                <h3>Editar Sección</h3>
            </span>
            <span className="editIconContainer">
                <EditIcon className="editIcon"/>
            </span>
        </div>
    )
}
