import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import { TextfielCode, TextfielDescription, TextfielName } from '../TextFieldCode/TextfieldCode';

const GridField = withStyles({
    root: {
        '& .MuiGrid-item': {
            display: 'grid',
            width: "80%",
        },
        },    
    },
  )(Grid);

export const GridTextField = () => {
    return (
        <GridField container alignItems="center" direction={"column"} spacing={1}>
            <Grid item>
                <TextfielCode/>
            </Grid>
            <Grid item>
                <TextfielName/>
            </Grid>
            <Grid item>
                <TextfielDescription/>
            </Grid>
        </GridField>
    )
}