import React from 'react';
import { ReactComponent as WavesAppIcon } from '../../../static/waves.svg';
import {Box, styled} from "@mui/material";

export const WavesIcon = () => {
    return (
        <LogoWrapper>
            <WavesAppIcon className={"circle-button"} />
        </LogoWrapper>
    )
}

const LogoWrapper = styled(Box)({
    "margin": "auto",
    cursor: "pointer"
})
