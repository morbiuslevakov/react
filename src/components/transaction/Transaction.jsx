import React from "react";
import {Box, Typography} from "@mui/material";


export const Transaction = ({ type, date, amount, fee, ...email }) => {
    const time = new Date(date + 10800000);
    const txTypes = {
        SWAP: "Обмен",
        EXTERNAL_WITHDRAW: "Вывод",
        REFERRAL_REWARD: "Вознаграждение"
    };

    return (
        <Box style={{"display":"block"}}>
            <Box>
                <Typography style={{"display":"flex", "float":"left", "color":"#717171", "fontFamily":"Montserrat, sans-serif"}}>{email[0] !== null ? <>Email<br/></> : ""}{txTypes[type]}<br/>Комиссия<br/>{time.toISOString().slice(0, 19).replace('T', ' ')}</Typography>
                <Typography style={{"display":"flex", "float":"right", "textAlign":"right", "color":"#717171", "fontFamily":"Montserrat, sans-serif"}}>{type === "SWAP" || type === "REFERRAL_REWARD" ? "+" : "-"}{type === "SWAP" ? amount - fee : amount + fee} YUSRA<br/>{fee} YUSRA<br/>Завершено</Typography>
            </Box>
        </Box>
    );
}