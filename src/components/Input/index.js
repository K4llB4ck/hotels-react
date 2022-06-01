import React, { useMemo } from 'react';
import TextField from '@mui/material/TextField';


const Input = ({ errors = false, ...rest }) => {



    const checkErrorField = useMemo(() => {
        if (errors && errors.key == rest.id) {
            return true;
        }
        return false;
    }, [errors]);

    return <TextField
        error={checkErrorField ? true : false}
        helperText={checkErrorField ? errors.message : ''}
        {...rest}
    />
}

export default Input;