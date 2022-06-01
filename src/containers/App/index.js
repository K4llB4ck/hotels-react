import React, { useState,useEffect } from 'react';
import Enrouter from '../../Routes/index';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from '../../slices/auth.slice';

const App = () => {

    const { authenticated } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        //Comprobar la sesión del usuario
        const token = localStorage.getItem('auth');
        if (token) {
            dispatch(authenticate(token));
        }

    }, []);

    return (
        <Enrouter authenticated={authenticated} />
    )
}

export default App;