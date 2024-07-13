import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FormError } from "../auth-pages/FormError";
import { StyledButton } from "./Styled";
import React from "react";

export const AuthCheck = ({ openAuthCheck, setOpenAuthCheck, handleAuthCheck, errorMessage, isError, setTotpCode, totpCode }) => {
    return (
        <Dialog style={{borderRadius: "15px"}}
                onClose={() => setOpenAuthCheck(false)}
                aria-labelledby="customized-dialog-title"
                open={openAuthCheck}>
            <DialogTitle sx={{ m: 0, p: 2 }} color={"#717171"} fontSize={"1.5rem"} id="customized-dialog-title">
                Подтверждение Authenticator
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={() => setOpenAuthCheck(false)}
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
                <FormError isError={isError} errorMessage={errorMessage} />
                <TextField id="totpCode" style={{"width":"100%", "marginTop":"10px", color: "#717171"}} onChange={(event) => { setTotpCode(event.target.value) }} value={totpCode} helperText={"Введите 6-значный код, сгенерированный приложением для аутентификации."} error={!/^\d{6}$/.test(totpCode)} type="text" label={"Код из приложения Authenticator"}/>
            </DialogContent>
            <DialogActions>
                <StyledButton onClick={() => handleAuthCheck()}>
                    Далее
                </StyledButton>
            </DialogActions>
        </Dialog>
    );
}