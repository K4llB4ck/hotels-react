import React, { useState, forwardRef, useImperativeHandle } from 'react';
import Modal from '@mui/material/Modal';
import { Box } from './styles';


const ModalComponent = forwardRef(function ({ children,close = () => {} }, ref) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () =>  {
        setOpen(false);
        close();
    }

    useImperativeHandle(ref, () => {
        return {
            handleOpen,
            handleClose
        }
    }, []);


    return (
        <Modal
            sx={{zIndex:300}}
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box>
                {children}
            </Box>
        </Modal>
    )


})

export default ModalComponent;