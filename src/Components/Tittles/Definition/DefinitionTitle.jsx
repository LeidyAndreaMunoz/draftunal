import React from 'react'; 
import './DefinitionTitle.css';
import VisibilityIcon from '@material-ui/icons/Visibility';

export const DefinitionTitle = () => {
    return (
        <div className="definitionTtile">
            <span >
                <h3>Definición</h3>
            </span>
            <span>
                <VisibilityIcon className="visibilityIcon"/>
            </span>
        </div>
    )
}