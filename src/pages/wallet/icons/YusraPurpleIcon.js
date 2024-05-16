import React from 'react';
import { ReactComponent as YusraPurpleAppIcon } from '../../../static/yusra_icon_purple.svg';
import {Box, styled} from "@mui/material";

export const YusraPurpleIcon = () => {
    return (
        <LogoWrapper>
            <YusraPurpleAppIcon />
        </LogoWrapper>
    )
}

const LogoWrapper = styled(Box)({
    display: "inline",
    "margin-left": "5px",
    cursor: "pointer"
})
