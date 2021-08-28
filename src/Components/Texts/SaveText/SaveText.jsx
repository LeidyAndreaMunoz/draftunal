import React from 'react';
import './SaveText.css';
import CheckIcon from '@material-ui/icons/Check';

export const SaveText = () => {
    return (
        <div className="saveTextContainer">
            <span>
                <h3>Sección editada exitosamente</h3>
            </span>
            <span>
                <CheckIcon className="saveCheck"/>
            </span>
        </div>
    )
}