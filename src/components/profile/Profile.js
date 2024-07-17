import React, { useState } from "react";
import {Stack, Typography, TextField, Box} from "@mui/material";
import { DefaultCard, CardContent } from "../../pages/Styled";
import { CustomButton } from '../CustomButton';
import { changePassword } from "../../utils/api-utils";
import { FormError } from "../auth-pages/FormError";
import { useSnackbar } from "notistack";
import { CopyIcon } from "../../pages/wallet/icons/CopyIcon";
import {useMediaQueryHook} from "../../hooks/use-media-query";

export const Profile = ({ user }) => {
    const isMobile = useMediaQueryHook('sm')
    const { enqueueSnackbar } = useSnackbar();
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [helperText, setHelperText] = useState("");
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!passwordsMatch || !passwordValid) {
            setIsError(true);
            setErrorMessage("Введите правильные значения");
        }
        const formData = JSON.stringify({ oldPassword: oldPassword, newPassword: newPassword })
        changePassword(formData).then(() => {
            setOldPassword("");
            setNewPassword("");
            setConfirmPassword("");
            setIsError(false);
            setErrorMessage("");
            enqueueSnackbar("Вы сменили пароль", {
                variant: "success",
                autoHideDuration: 2000
                // anchorOrigin: { vertical: "top", horizontal: "right" }
            });
            }
        ).catch(error => {
            setErrorMessage(error);
            setIsError(true);
        });
    }

    const handleNewPasswordChange = (event) => {
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&_.{}()#-]{8,}$/.test(event.target.value)) {
            setHelperText("Пароль должен состоять из не менее чем 8 символов, " +
                "включая по крайней мере одну строчную и одну заглавную букву, " +
                "хотя бы одну цифру и специальный символ (допустимые специальные символы: @$!%*?&_.{}()#-)")
            setPasswordValid(false);
        } else {
            setHelperText("");
            setPasswordValid(true);
        }
        setNewPassword(event.target.value);
        setPasswordsMatch(event.target.value === confirmPassword);
        console.log(passwordsMatch)
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
        setPasswordsMatch(event.target.value === newPassword);
    };

    return (
        <DefaultCard className={"glass svelte-10w51t0 wallet-card"}>
            <CardContent style={{"display":"flex", "alignItems":"center"}}>
                <Stack className={"actions-block balance"}>
                    <div className={"avatar"}></div>
                </Stack>
                <Stack style={{"width":"100%", "display":"flex", "alignItems":"center", "marginTop":"10px"}}>
                    <Typography style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif"}} fontSize={"1.5rem"}>Ваша реферальная ссылка: </Typography>
                    <Stack flexDirection={'row'} alignItems={'center'} gap={1}>
                        <Typography style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif"}} sx={{ wordBreak: 'break-all' }}>{`${user.id}`}</Typography>
                        <CopyIcon text={`https://swap.yusra.community/register?referrer=${user.id}`} />
                    </Stack>
                </Stack>

                <Stack style={{"width":"100%", "display":"flex", "alignItems":"center", "marginTop":"10px"}}>
                    <Typography style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif"}} fontSize={"1.5rem"}>логин: {user.email}</Typography>
                    <Box style={{display: "flex", flexDirection: "row", padding: "20px", alignItems: "center", gap: "25px"}}>
                        <Box style={{display: "flex", alignItems: "center"}}>
                            <Typography style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif", "display":"block", textAlign: "center"}} fontSize={isMobile ? "1.5rem" : "2.5rem"}>
                                Приглашено<br/>[ {user.reffs} ]
                            </Typography>
                        </Box>
                        <Box style={{display: "flex", alignItems: "center"}}>
                            <Typography style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif", "display":"block", textAlign: "center"}} fontSize={isMobile ? "1.5rem" : "2.5rem"}>
                                Выведено<br/>[ {user.withdrawn} ]
                            </Typography>
                        </Box>
                    </Box>
                    {/*<form onSubmit={handleSubmit}>*/}
                    {/*    <FormError isError={isError} errorMessage={errorMessage} />*/}
                    {/*    <TextField id="oldPassword" style={{"width":"100%", "marginTop":"10px"}} onChange={(event) => { setOldPassword(event.target.value) }} value={oldPassword} type="text" placeholder="Старый пароль"/>*/}
                    {/*    <TextField id="newPassword" style={{"width":"100%", "marginTop":"10px"}} error={!passwordValid} helperText={helperText} onChange={(event) => { handleNewPasswordChange(event) }} value={newPassword} type="text" placeholder="Новый пароль"/>*/}
                    {/*    <TextField id="newPasswordConfirm" style={{"width":"100%", "marginTop":"10px"}} error={!passwordsMatch} helperText={!passwordsMatch ? "Пароли не совпадают" : ""} onChange={(event) => { handleConfirmPasswordChange(event) }} value={confirmPassword} type="text" placeholder="Подтвердите новый пароль"/>*/}
                    {/*    <CustomButton type="submit" text="Изменить пароль"/>*/}
                    {/*</form>*/}
                </Stack>
            </CardContent>
        </DefaultCard>
    );
}