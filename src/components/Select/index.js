import React, { useMemo } from 'react';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';


const SelectComponent = ({ list = [], value,name, label, handleChange, keyItem = "value", valueItem = "name" }) => {

    const getItemsSelect = useMemo(() => {

        return list.map(item => <MenuItem value={item[keyItem]}>{item[valueItem]}</MenuItem>);
    
    }, [list]);


    return (
        <FormControl margin='normal' fullWidth>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                name={name}
                label={label}
                onChange={handleChange}
            >
                {getItemsSelect}
            </Select>
        </FormControl>
    )


}
export default SelectComponent;