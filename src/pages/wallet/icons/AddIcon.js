import React from 'react';
import { ReactComponent as AddAppIcon } from '../../../static/add.svg';
import {Box, styled} from "@mui/material";

export const AddIcon = () => {
    return (
        <LogoWrapper>
            <AddAppIcon style={{display: "block"}} className={"circle-button"}/>
            <span style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif"}} >Ввод</span>
        </LogoWrapper>
    )
}

const LogoWrapper = styled(Box)({
    display: "inline-block",
    "margin-left": "20px",
    cursor: "pointer",
    textAlign: "center"
})
