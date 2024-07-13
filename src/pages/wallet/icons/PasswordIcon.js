import React from 'react';
import { ReactComponent as SvgIcon } from '../../../static/password.svg';
import {Box, styled} from "@mui/material";

export const PasswordIcon = () => {
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
