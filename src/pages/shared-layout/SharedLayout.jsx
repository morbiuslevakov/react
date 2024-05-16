import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { useMediaQueryHook } from "../../hooks/use-media-query";
import { AppHeader } from "../../components/header/AppHeader";

export const SharedLayout = () => {
    const isMobile = useMediaQueryHook('sm')
    const marginTop = isMobile ? 9 : 11

    return (
        <>
            <AppHeader />
            <Box mt={marginTop}>
                <Outlet />
            </Box>
        </>
    )
}
