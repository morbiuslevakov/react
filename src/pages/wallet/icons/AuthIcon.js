import React from 'react';
import { ReactComponent as SvgIcon } from '../../../static/auth.svg';
import {Box, styled} from "@mui/material";

export const AuthIcon = () => {
    return (
        <LogoWrapper>
            <SvgIcon />
        </LogoWrapper>
    )
}

const LogoWrapper = styled(Box)({
    display: "inline-block",
    cursor: "pointer",
    textAlign: "center"
})
