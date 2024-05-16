import React from "react";
import {Box, Typography} from '@mui/material';
import { useSnackbar } from 'notistack';
import {WavesIcon} from "../../pages/wallet/icons/WavesIcon";
import {SolanaIcon} from "../../pages/wallet/icons/SolanaIcon";

export const Card = ({ address, network, blocks, minSum, time, fee }) => {
    const { enqueueSnackbar } = useSnackbar();

    const handleClick = () => {
        const message = network === "WAVES" ? "Адрес Waves скопирован в буфер." : "Адрес Solana скопирован в буфер.";
        navigator.clipboard.writeText(address).then();
        enqueueSnackbar(message, {
            variant: "success",
            autoHideDuration: 2000
            // anchorOrigin: { vertical: "top", horizontal: "right" }
        });
    };

    return (
        <Box id="waves-card" className={"custom-box"} onClick={handleClick}>
            <Box>
                <Typography style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif", "display":"flex"}} fontSize={"2rem"} fontWeight={500}>
                    {network}
                </Typography>
                <Typography style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif", "display":"block"}} fontSize={"1rem"}>
                    Подтверждений блоков: {blocks}
                </Typography>
                <Typography style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif", "display":"block"}} fontSize={"1rem"}>
                    Минимальная сумма ввода: {minSum} YUSRA
                </Typography>
                <Typography style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif", "display":"block"}} fontSize={"1rem"}>
                    Приблизительное время поступления: {time} мин.
                </Typography>
                <Typography style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif", "display":"block"}} fontSize={"1rem"}>
                    Комиссия пополнения: {fee} YUSRA
                </Typography>
            </Box>
            <Box style={{"marginLeft":"auto", "display":"flex", "alignItems":"center"}}>
                {network === "WAVES" ? <WavesIcon/> : <SolanaIcon/>}
            </Box>
        </Box>
    );
}