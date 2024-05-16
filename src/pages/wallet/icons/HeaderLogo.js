import React from 'react';
import { ReactComponent as YusraAppIcon } from '../../../static/yusra_icon.svg';
import {Box, styled} from "@mui/material";

export const HeaderLogo = () => {
    return (
        <LogoWrapper>
            <YusraAppIcon />
        </LogoWrapper>
    )
}

const LogoWrapper = styled(Box)({
    display: "flex",
    float: "left",
    cursor: "pointer"
})
