import React from 'react';
import { ReactComponent as SvgItem } from '../../../static/click.svg';
import {Box, styled} from "@mui/material";

export const Click = () => {
    return (
        <LogoWrapper>
            <SvgItem style={{display: "block"}} className={"click-here"}/>
        </LogoWrapper>
    )
}

const LogoWrapper = styled(Box)({
    "margin": "auto"
})