import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { StyledButton } from './Styled';

export const AuthDeleteWarning = ({ setOpenAuthDeleteWarning, openAuthDeleteWarning, setOpenAuthDeleteCheck }) => {
    return (
        <Dialog
            style={{borderRadius: "15px"}}
            onClose={() => setOpenAuthDeleteWarning(false)}
            aria-labelledby="customized-dialog-title"
            open={openAuthDeleteWarning}>
            <DialogTitle sx={{ m: 0, p: 2 }} color={"#717171"} fontSize={"1.5rem"} id="customized-dialog-title">
                Удаление Authenticator
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={() => setOpenAuthDeleteWarning(false)}
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
                    Вы уверены, что хотите удалить проверку с помощью приложения Authenticator?
                </Typography>
                <Typography style={{marginBottom: "15px"}} fontSize={"1rem"} color={"#717171"}>
                    <ul>
                        <li>Вывод средств будет отключен в течение 24 ч. после удаления верификации через ваше приложение для аутентификации в целях защиты ваших активов.</li>
                        <li>Для вывода средств и других действий требуется два метода проверки безопасности. Использование только одного метода верификации подвергает ваш счет большему риску.</li>
                    </ul>
                </Typography>
            </DialogContent>
            <DialogActions>
                <StyledButton style={{backgroundColor: "unset", color: "#717171", border: "1px solid #717171", "&:hover": {
                        backgroundColor: "#08694d"
                    }}} onClick={() => setOpenAuthDeleteWarning(false)}>
                    Отменить
                </StyledButton>
                <StyledButton onClick={() => {
                    setOpenAuthDeleteWarning(false);
                    setOpenAuthDeleteCheck(true);
                }}>
                    Продолжить
                </StyledButton>
            </DialogActions>
        </Dialog>
    );
}