import React from 'react';
import { ReactComponent as AddAppIcon } from '../../../static/add.svg';
import {Box, styled} from "@mui/material";

export const AddIcon = () => {
    return (
        <LogoWrapper>
            <AddAppIcon className={"circle-button"} />
        </LogoWrapper>
    )
}

const LogoWrapper = styled(Box)({
    display: "inline-block",
    "margin-left": "20px",
    cursor: "pointer"
})
