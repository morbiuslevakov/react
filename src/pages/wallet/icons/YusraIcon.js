import React from 'react';
import { ReactComponent as YusraAppIcon } from '../../../static/yusra.svg';
import {Box, styled} from "@mui/material";

export const YusraIcon = () => {
    return (
        <LogoWrapper>
            <YusraAppIcon />
        </LogoWrapper>
    )
}

const LogoWrapper = styled(Box)({
    position: "absolute",
    top: 0,
    right: 0,
    "z-index": -999
});
