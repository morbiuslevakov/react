import React from 'react';
import { ReactComponent as YusraGreyAppIcon } from '../../../static/yusra_icon_gray.svg';
import {Box, styled} from "@mui/material";

export const YusraGreyIcon = () => {
    return (
        <LogoWrapper>
            <YusraGreyAppIcon />
        </LogoWrapper>
    )
}

const LogoWrapper = styled(Box)({
    display: "flex",
    "margin-left": "5px",
    cursor: "pointer"
})
