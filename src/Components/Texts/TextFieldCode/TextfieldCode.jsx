import React from 'react';
import './TextfieldCode.css'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core';


const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'gray',
        fontSize: 12,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'gray',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'gray',
        },
        '&:hover fieldset': {
          borderColor: 'gray',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'gray',
        },
      },
      '& .MuiDialog-paper': {
          width: 900,
      }, 
      '& .MuiOutlinedInput-input': {
        padding: "3% 6%",
        fontSize: 16,
        color: "#696363",
      }
    },
  })(TextField);



export const TextfielDescription = (props) => {

  const { keys, setInfo, info } = props

  const handleChange = (event) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.valu
   });
  }
    return (
        <>
          {keys ? keys.map((key) => (
            <CssTextField multiline
              value={info.name}
              name={key.name}
              onChange={handleChange} 
              label={key.label } 
              variant="outlined"
            />
          )) : ''}
        </>
    )
}