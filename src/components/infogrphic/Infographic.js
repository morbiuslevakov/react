import React from "react";
import {Box, Typography} from "@mui/material";


export const Infographic = ({title, text, titleFloat, textFloat}) => {
    const border = titleFloat === "left" ? "borderRight" : "borderLeft";
    const style = {
        "padding":"24px 30px",
        "float": textFloat
    }
    style[border] = "4px solid #004444";

    return (
        <Box style={{"padding":"20px"}}>
            {/*<Box style={{"marginLeft": "auto", "float": `${titleFloat}`}}>*/}
            {/*    <Typography style={{"color":"#ffffff", "fontFamily":"Montserrat, sans-serif", "marginLeft": "auto"}} fontSize={"7.5rem"} fontWeight={800}>*/}
            {/*        {title}*/}
            {/*    </Typography>*/}
            {/*</Box>*/}
            <Box style={style}>
                <Typography fontWeight={600} style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif", "display":"block"}} fontSize={"1rem"}>
                    {text}
                </Typography>
            </Box>
        </Box>
    );
}