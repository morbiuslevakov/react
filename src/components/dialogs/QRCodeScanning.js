import React from "react";
import { Dialog, Box, DialogActions, DialogContent, DialogTitle, IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CopyIcon } from "../../pages/wallet/icons/CopyIcon";
import { StyledButton } from './Styled';

export const QRCodeScanning = ({ openQRCodeScan, setOpenQRCodeScan, imageData, setOpenAuthCheck, secret }) => {
    return (
        <Dialog
            style={{borderRadius: "15px"}}
            onClose={() => setOpenQRCodeScan(false)}
            aria-labelledby="customized-dialog-title"
            open={openQRCodeScan}>
            <DialogTitle sx={{ m: 0, p: 2 }} color={"#717171"} fontSize={"1.5rem"} id="customized-dialog-title">
                Как привязать аутентификатор
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={() => setOpenQRCodeScan(false)}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent>
                <Typography style={{marginBottom: "15px"}} fontSize={"1rem"} color={"#717171"}>
                    Отсканируйте этот QR-код в приложении Authenticator
                </Typography>
                <img style={{margin: "auto", display: "block", border: "1px solid #717171"}} src={imageData} width={"170px"} height={"170px"}  alt={"Scan this QR code"}/>
                <Stack style={{margin: "auto"}} flexDirection={'row'} alignItems={'center'} gap={1}>
                    <Box style={{margin: "auto"}}>
                        <Typography fontSize={"0.75rem"} style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif", display: "inline-flex"}} sx={{ wordBreak: 'break-all' }}>{secret}</Typography>
                        <CopyIcon style={{display: ":inline-flex"}} text={secret} />
                    </Box>
                </Stack>
                <Typography fontSize={"1rem"} style={{marginTop: "15px"}} color={"#717171"}>
                    Если вы не можете отсканировать QR-код, введите этот код вручную в приложение.
                </Typography>
            </DialogContent>
            <DialogActions>
                <StyledButton onClick={() => {
                    setOpenQRCodeScan(false);
                    setOpenAuthCheck(true);
                }}>
                    Далее
                </StyledButton>
            </DialogActions>
        </Dialog>
    );
}