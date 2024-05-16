import React from 'react';
import { ReactComponent as BackArrowAppIcon } from '../../../static/back-arrow.svg';
import {Box, styled} from "@mui/material";

export const BackArrowIcon = () => {
    return (
        <LogoWrapper>
            <BackArrowAppIcon className={"circle-button"} />
        </LogoWrapper>
    )
}

const LogoWrapper = styled(Box)({
    display: "block",
    cursor: "pointer"
})
