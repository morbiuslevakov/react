import {SnackbarProvider, useSnackbar} from "notistack";
import {PageContent, Wrapper} from "../../components/auth-pages/Styled";
import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import {CardContent, DefaultCard} from "../Styled";
import {Link} from "react-router-dom";
import {BackArrowIcon} from "../wallet/icons/BackArrow";
import React, {useState} from "react";
import {FormError} from "../../components/auth-pages/FormError";
import {CustomButton} from "../../components/CustomButton";
import {changePassword} from "../../utils/api-utils";
import {WarningOutlined} from "@mui/icons-material";

export const ManagePassword = () => {
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
                    autoHideDuration: 2000,
                    anchorOrigin: { vertical: "top", horizontal: "right" }
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
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
        setPasswordsMatch(event.target.value === newPassword);
    };


    return (
        <Wrapper style={{"backgroundImage":"url(https://s3.timeweb.com/24581035-081cc679-ce58-4307-808e-bb42d83baee6/yusra.svg)", "backgroundRepeat":"no-repeat", "backgroundAttachment":"fixed", "width":"100%", "height":"100vh", "top":0, "right":0}}>
            <SnackbarProvider maxSnack={2}>
                <PageContent>
                    <Stack mt={10} gap={7}>
                        <DefaultCard className={"glass svelte-10w51t0 wallet-card"}>
                            <CardContent style={{"display":"flex", "alignItems":"start"}}>
                                <Stack style={{"marginBottom": "10px", "display":"block"}}>
                                    <Link to={"/profile"} style={{"display": "flex", "float": "left"}}>
                                        <BackArrowIcon/>
                                    </Link>
                                </Stack>
                                <Stack style={{width: "100%"}}>
                                    <Typography fontSize={"2rem"} fontWeight={500} color={"#717171"} style={{"marginBottom": "10px"}}>
                                        Изменить пароль
                                    </Typography>
                                    <Stack style={{display: "flex", alignItems: "center", flexDirection: "row", border: "1px solid #D2A90AFF", padding: "20px", borderRadius: "5px", backgroundColor: "rgba(210,169,10,0.9)"}}>
                                        <WarningOutlined color={"#ffffff"} style={{marginRight: "10px", color: "#ffffff"}} fontSize={"large"} />
                                        <Typography color={"#ffffff"}>Чтобы защитить ваш аккаунт вывод средств будет отключен на 24 ч. после смены пароля.</Typography>
                                    </Stack>
                                    <Stack style={{"width":"100%", "display":"flex", "alignItems":"center", "marginTop":"10px"}}>
                                        <form style={{"width":"100%"}} onSubmit={handleSubmit}>
                                            <FormError isError={isError} errorMessage={errorMessage} />
                                            <TextField id="oldPassword" style={{"width":"100%", "marginTop":"10px"}} onChange={(event) => { setOldPassword(event.target.value) }} value={oldPassword} type="text" placeholder="Старый пароль"/>
                                            <TextField id="newPassword" style={{"width":"100%", "marginTop":"10px"}} error={!passwordValid} helperText={helperText} onChange={(event) => { handleNewPasswordChange(event) }} value={newPassword} type="text" placeholder="Новый пароль"/>
                                            <TextField id="newPasswordConfirm" style={{"width":"100%", "marginTop":"10px"}} error={!passwordsMatch} helperText={!passwordsMatch ? "Пароли не совпадают" : ""} onChange={(event) => { handleConfirmPasswordChange(event) }} value={confirmPassword} type="text" placeholder="Подтвердите новый пароль"/>
                                            <CustomButton type="submit" text="Изменить пароль"/>
                                        </form>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </DefaultCard>
                    </Stack>
                </PageContent>
            </SnackbarProvider>
        </Wrapper>
    );
}