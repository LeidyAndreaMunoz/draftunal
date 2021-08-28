import './Cancel.css';
import { Button, withStyles} from '@material-ui/core';

export const CancelButton = withStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        color: '#777777',
        borderRadius : 3,
        paddingRight: 9,   
    },
  })(Button);