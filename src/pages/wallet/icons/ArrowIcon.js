import React from 'react';
import { ReactComponent as ArrowAppIcon } from '../../../static/arrow.svg';
import {Box, styled} from "@mui/material";

export const ArrowIcon = () => {
    return (
        <LogoWrapper>
            <ArrowAppIcon style={{display:"block"}} className={"circle-button"} />
            <span style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif"}} >Вывод</span>
        </LogoWrapper>
    )
}

const LogoWrapper = styled(Box)({
    display: "inline-block",
    cursor: "pointer",
    textAlign: "center"
})
