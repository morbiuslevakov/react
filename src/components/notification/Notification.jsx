import React from "react";
import { Button } from '@mui/material';
import { useSnackbar } from 'notistack';


export const Notification = ({message}) => {
    const { enqueueSnackbar } = useSnackbar();

    const handleClick = () => {
        enqueueSnackbar(message, {
            variant: "success",
            autoHideDuration: 10000
            // anchorOrigin: { vertical: "top", horizontal: "right" }
        });
    };

    return (
        <Button variant="outlined" onClick={handleClick}>
            Generate Snackbar Dynamicly
        </Button>
    );
}