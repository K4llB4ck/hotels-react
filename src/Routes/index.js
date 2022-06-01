import React, { Fragment } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { routes } from '../config';
import PrivateRoute from './PrivateRoute';


const Enrouter = ({ children }) => {

    return (
        <Fragment>
            <Routes>
                {
                    routes.map((route, index) => {
                        if (route.private) {
                            return <Route key={index} path={route.path} element={<PrivateRoute><route.component /></PrivateRoute>} />
                        }
                        return <Route  key={index} path={route.path} element={<route.component />} />
                    })
                }
            </Routes>
            {children}

        </Fragment>
    )
}

export default Enrouter;