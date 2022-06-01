import React, { useState } from 'react';
import Container from '@mui/material/Container';
import useValidator from '../../Hooks/validator';
import { hotelsValidation } from '../../validations';
import Input from '../../components/Input';
import Button from '@mui/material/Button';



const defaults = {
    nit: '',
    name: '',
    street: '',
    city: '',
    rooms: 0
};


const CreateHotel = ({ create }) => {

    const { validation, errors } = useValidator(hotelsValidation.createHotel);



    const [form, setForm] = useState(defaults);

    const handlechange = (event) => {
        const { value } = event.target;
        console.log(value);
        const id = event.target.getAttribute('id');
        setForm(state => ({
            ...state,
            [id]: value
        }));
    }


    const handleSubmit = () => {
        const validate = validation(form);
        if (!validate.error) {
            create(form);
        }
    }

    return (
        <Container maxWidth="sm">
            <h3>Creación de Hotel</h3>

            <Input errors={errors} fullWidth value={form.firstname} onChange={handlechange} id='nit' margin="normal" label="Nit" />
            <Input errors={errors} fullWidth value={form.lastname} onChange={handlechange} id='name' margin="normal" label="Nombre" />
            <Input errors={errors} fullWidth value={form.company} onChange={handlechange} id='street' margin="normal" label="Dirección del hotel" />
            <Input errors={errors} fullWidth value={form.email} onChange={handlechange} id='city' margin="normal" label="Ciudad" />
            <Input errors={errors} fullWidth value={form.email} onChange={handlechange} id='rooms' margin="normal" label="Numero de habitaciones" />
            <Button onClick={handleSubmit} variant="contained">Crear Hotel</Button>

        </Container>
    )
}
export default CreateHotel;