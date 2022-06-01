import React, { useState,useEffect } from 'react';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { WrapperLogin, Stack, Title } from './styles';
import { login } from '../../slices/auth.slice';
import { useDispatch,useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';


const Login = () => {

    const {authenticated} = useSelector(state => state.auth);
    const navigation = useNavigate();

    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if(authenticated) {
            navigation('/users',{replace:true});
        }

    },[authenticated]);

    const handleChange = (e) => {
        const { value } = e.target;
        const field = e.target.getAttribute('id');

        setForm(state => ({
            ...state,
            [field]: value
        }));

    }

    const handleSubmit = () => {
        dispatch(login(form));

    }

    return <Stack>
        <WrapperLogin>
            <CardContent>
                <Title>Ingreso</Title>
                <TextField value={form.email} onChange={handleChange} margin='normal' fullWidth id="email" label="Correo electronico" variant="outlined" />
                <TextField value={form.password} onChange={handleChange} margin='normal' fullWidth id="password" type="password" label="contraseña" variant="outlined" />
                <Button onClick={handleSubmit} variant='contained'> Iniciar sesión</Button>
            </CardContent>
        </WrapperLogin>
    </Stack>
};

export default Login;