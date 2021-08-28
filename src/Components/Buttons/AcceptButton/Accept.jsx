import './Accept.css';
import { Button, withStyles} from '@material-ui/core';

export const AcceptButton = withStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#94B43B',
        color: 'white',
        borderRadius : 3,
        paddingRight: 9,
        '&:hover': {
            backgroundColor: 'white',
            color: '#94B43B',
/*          border: 10,
            BorderColor:"success.dark", */
        },    
    },
  })(Button);
