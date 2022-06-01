import React, { useState, Fragment, useEffect } from 'react';
import Container from '@mui/material/Container';
import useValidator from '../../Hooks/validator';
import { hotelsValidation } from '../../validations';
import Input from '../../components/Input';
import Button from '@mui/material/Button';
import Select from '../../components/Select';
import { useDispatch } from 'react-redux';
import { allRoomsAccommodations, assignRoomsHotel } from '../../slices/hotels.slice';
import Swal from 'sweetalert2'



const defaults = {
    typeRoom: '',
    combination: '',
    rooms: ''
};


const CreateHotel = ({ create, typeRooms, roomAccommodations, hotel,toggleForm }) => {

    const { validation, errors } = useValidator(hotelsValidation.assignRoom);

    const [form, setForm] = useState(defaults);
    const dispatch = useDispatch();



    const updateForm = (event) => {
        const { name, value } = event.target;
        setForm(state => ({
            ...state,
            [name]: value
        }));
    }

    const handleSubmit = () => {
        const validate = validation(form);
        if (!validate.error) {
            dispatch(assignRoomsHotel(form)).unwrap().then(() => {
                toggleForm(true);
                Swal.fire({
                    'title': 'Asignación',
                    "text": "Se ha realizado la asignación correctamente",
                    "icon": 'success'

                });
            }).catch(error => {
                Swal.fire({
                    'title': 'Error al asignar',
                    "text":  error.message,
                    "icon": 'error'

                });
            });
        }
    }

    const handleTypeRoom = (event) => {
        updateForm(event);
        dispatch(allRoomsAccommodations(event.target.value));
    }


    return (
        <Fragment>
            <h3>Asignación de Habitaciones {hotel.name} </h3>
            <Select name="typeRoom" list={typeRooms} keyItem="id" handleChange={handleTypeRoom} value={form.typeRoom} label="Tipo de habitación" />
            <Select name="combination" list={roomAccommodations} keyItem="id" handleChange={updateForm} value={form.combination} label="Tipo de Acomodación" />
            <Input errors={errors} fullWidth value={form.rooms} onChange={updateForm} name='rooms' margin="normal" label="Numero de cuartos" />

            <Button onClick={handleSubmit} variant="contained">Asignar cuartos</Button>
        </Fragment>

    )
}
export default CreateHotel;