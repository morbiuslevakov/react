import React from 'react';
import { ReactComponent as TelegramQrAppIcon } from '../../../static/tg_qr.svg';
import {Box, styled} from "@mui/material";

export const TelegramQrIcon = () => {
    return (
        <LogoWrapper>
            <TelegramQrAppIcon />
        </LogoWrapper>
    )
}

const LogoWrapper = styled(Box)({
    display: "block",
    position: "absolute",
    width: "150px",
    height: "150px",
    top: 0,
    left: 0,
    cursor: "pointer"
})
