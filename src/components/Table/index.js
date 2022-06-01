import React, { useCallback, useMemo } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import { Hotel } from '@mui/icons-material';



const TableComponent = ({ headers = [], data = [], handleAssign }) => {

    const getHeaders = useCallback(() => {
        return (
            <TableHead>
                <TableRow>
                    {
                        headers.map(header => {
                            return <TableCell>{header}</TableCell>
                        })
                    }

                </TableRow>
            </TableHead>
        )
    }, [data]);

    const getData = useMemo(() => {
        return (<TableBody>

            {data.map((hotel) => (
                <TableRow
                    key={Hotel.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell>{hotel.nit}</TableCell>
                    <TableCell>{hotel.name}</TableCell>
                    <TableCell>{hotel.street}</TableCell>
                    <TableCell>{hotel.city}</TableCell>
                    <TableCell>{hotel.rooms}</TableCell>
                    <TableCell><Fab onClick={() => handleAssign(hotel)} color="primary" aria-label="add">
                        <BedroomChildIcon />
                    </Fab></TableCell>
                </TableRow>
            ))}
        </TableBody>)
    }, [data]);


    return (
        <Table  aria-label="simple table">
            {getHeaders()}
            {getData}

        </Table>
    )
}

export default TableComponent;