import React from "react";
import {Box, Typography} from "@mui/material";


export const Transaction = ({ type, date, amount, fee }) => {
    const time = new Date(date + 10800000);

    return (
        <Box style={{"display":"block"}}>
            <Box>
                <Typography style={{"display":"flex", "float":"left", "color":"#717171", "fontFamily":"Montserrat, sans-serif"}}>{type === "SWAP" ? "ОБМЕН" : "ВЫВОД"}<br/>Комиссия<br/>{time.toISOString().slice(0, 19).replace('T', ' ')}</Typography>
                <Typography style={{"display":"flex", "float":"right", "textAlign":"right", "color":"#717171", "fontFamily":"Montserrat, sans-serif"}}>{type === "SWAP" ? "+" : "-"}{type === "SWAP" ? amount - fee : amount + fee} YUSRA<br/>{fee} YUSRA<br/>Завершено</Typography>
            </Box>
        </Box>
    );
}