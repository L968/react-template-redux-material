import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import useStyles from './styles';

export default function Toast() {
    const classes = useStyles();

    return (
        <ToastContainer className={classes.toast} pauseOnFocusLoss={false} />
    )
}

export { toast };