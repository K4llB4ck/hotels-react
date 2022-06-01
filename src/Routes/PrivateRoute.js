import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, ...rest }) => {

    const { authenticated } = useSelector(state => state.auth);

    if (authenticated == null) return;

    if (!authenticated) {
        return <Navigate to="/login" replace />
    }

    return children


}
export default PrivateRoute;