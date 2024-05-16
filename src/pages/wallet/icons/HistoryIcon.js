import React from 'react';
import { ReactComponent as HistoryAppIcon } from '../../../static/history_icon_grey.svg';
import {Box, styled} from "@mui/material";

export const HistoryIcon = () => {
    return (
        <LogoWrapper>
            <HistoryAppIcon className={"circle-button"} />
        </LogoWrapper>
    )
}

const LogoWrapper = styled(Box)({
    display: "block",
    cursor: "pointer"
})
