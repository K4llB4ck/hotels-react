import React, { useEffect, useRef, useState } from 'react';
import CreateHotel from './CreateHotel';
import { createHotel, allHotels, allTypeRooms, allRoomsAccommodations } from '../../slices/hotels.slice';
import { useSelector, useDispatch } from 'react-redux';
import Table from '../../components/Table';
import { Container, Button, Stack } from '@mui/material';
import ModalComponent from '../../components/Modal';
import AssignRoom from './AssignRoom';
import Swal from 'sweetalert2'


const Hotels = () => {

    const dispatch = useDispatch();
    const { list, loading, typeRooms, roomAccommodations } = useSelector(state => state.hotels);
    const [hotel, setHotel] = useState(null);
    const modalRef = useRef();

    useEffect(() => {
        dispatch(allHotels());
        dispatch(allTypeRooms());
    }, []);

    const toggleForm = (close = false) => {
        if (close) return modalRef.current.handleClose();
        modalRef.current.handleOpen();
    }

    const saveHotel = hotel => dispatch(createHotel(hotel)).unwrap().then(() => {

        toggleForm(true);
        Swal.fire({
            'title': 'Hotel',
            "text": "Se ha creado el hotel correctamente",
            "icon": 'success'

        });
    }).catch(error => {
        Swal.fire({
            'title': 'Error al crear',
            "text": error.message,
            "icon": 'error'

        });
    });
    const openAssignRoom = (hotel) => {
        setHotel(hotel);
        toggleForm();
    }



    return (
        <Container>
            <ModalComponent close={() => setHotel(null)} ref={modalRef} >
                {!hotel ?
                    <CreateHotel handleCreate={() => modalRef.current.handleClose()} create={saveHotel} /> :
                    <AssignRoom toggleForm={toggleForm} hotel={hotel} roomAccommodations={roomAccommodations} typeRooms={typeRooms} label="Tipo de Habitación" />
                }
            </ModalComponent>
            <h3>Hoteles decameron</h3>
            <p>Listado de hoteles regitrados bajo la marca </p>
            <Button onClick={() => toggleForm()} size='small' variant="contained">Agregar hotel</Button>
            <Table
                handleAssign={openAssignRoom}
                data={list}
                headers={["Nit", "Nombre", "Dirección", "Ciudad", "Numero de cuartos", "Acciones"]}
            />
        </Container>
    )
}

export default Hotels;