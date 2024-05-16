import React from 'react';
import { ReactComponent as ArrowAppIcon } from '../../../static/arrow.svg';
import {Box, styled} from "@mui/material";

export const ArrowIcon = () => {
    return (
        <LogoWrapper>
            <ArrowAppIcon className={"circle-button"} />
        </LogoWrapper>
    )
}

const LogoWrapper = styled(Box)({
    display: "inline-block",
    cursor: "pointer"
})
