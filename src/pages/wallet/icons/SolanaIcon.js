import React from 'react';
import { ReactComponent as SolanaAppIcon } from '../../../static/solana.svg';
import {Box, styled} from "@mui/material";

export const SolanaIcon = () => {
    return (
        <LogoWrapper>
            <SolanaAppIcon className={"circle-button"} />
        </LogoWrapper>
    )
}

const LogoWrapper = styled(Box)({
    display: "block",
    "margin-left": "auto",
    cursor: "pointer"
})
