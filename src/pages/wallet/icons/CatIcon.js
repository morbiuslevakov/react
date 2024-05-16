import React from 'react';
import { ReactComponent as CatAppIcon } from '../../../static/cat.svg';
import {Box, styled} from "@mui/material";

export const CatIcon = () => {
    return (
        <LogoWrapper>
            <CatAppIcon />
        </LogoWrapper>
    )
}

const LogoWrapper = styled(Box)({
    position: "absolute",
    top: 50,
    left: 0,
    "z-index": -999
});
