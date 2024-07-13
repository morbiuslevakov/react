import React, {useContext, useEffect, useState} from "react";
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import {Stack, Typography, InputLabel, styled, Button, TextField} from "@mui/material";
import { CustomInput, PageContent, Wrapper } from "../../components/auth-pages/Styled";
import { FormError } from "../../components/auth-pages/FormError";
import { DefaultCard, CardContent } from '../Styled';
import { CustomButton } from '../../components/CustomButton';
import { Infographic } from '../../components/infogrphic/Infographic';
import UserContext from "../../context/user-context";
import { forgetPassword, forgetPasswordPost } from "../../utils/api-utils";

export const CustomButtonStyled = styled(Button)({
    textTransform: "math-auto",
    marginTop: "20px",
    width: '100%',
    backgroundColor: "#004444",
    height: "48px",
    "&:hover": {
        backgroundColor: "#08694d"
    },
})

export const ForgetPassword = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [isRecoveryLink, setIsRecoveryLink] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const { user } = useContext(UserContext);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [helperText, setHelperText] = useState("");
    const [totpCode, setTotpCode] = useState("");
    const [tfaRequired, setTfaRequired] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!passwordsMatch || !passwordValid) {
            setIsError(true);
            setErrorMessage("Введите правильные значения");
        }
        const formData = JSON.stringify({ totpCode: totpCode, password: newPassword})
        forgetPasswordPost(formData, params.get("recoveryLink")).then(() => {
                setNewPassword("");
                setConfirmPassword("");
                setIsError(false);
                setErrorMessage("");
                navigate("/login?email=" + email);
                window.location.reload();
            }
        ).catch(error => {
            if (error === "Two factor authentication required") {
                setTfaRequired(true)
                setErrorMessage("Введите 2FA код");
            } else if (error === "Invalid two factor authentication code") {
                setErrorMessage("Неверный 2FA код");
            } else {
                setErrorMessage(error);
            }
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

    const requestRecoveryEmail = () => {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setIsError(true);
            setErrorMessage("Введите валидный email")
            return;
        }
        forgetPassword(email).then((response) => {
            navigate("/login");
            window.location.reload();
        }).catch((error) => {
            setIsError(true);
            setErrorMessage(error);
        })
    }

    useEffect(() => {
        setEmail(params.get("email"));
        if (params.get("recoveryLink") !== null) {
            setIsRecoveryLink(true);
        }
    }, []);

    if (user) {
        return <Navigate to={'/'} />
    }

    return (
        <Wrapper>
            <PageContent>
                {!isRecoveryLink &&
                    <>
                        <Stack style={{"width":"100%", "display":"flex", "alignItems":"center"}} mt={10} gap={7}>
                            <Infographic titleFloat="right" textFloat="right" title="about"
                                         text="Чтобы сбросить пароль, перейдите по ссылке в письме и установите новый пароль. Вывод средств будет отключен в течение 24 ч. после сброса пароля в целях защиты ваших активов."/>
                            <DefaultCard className={"glass svelte-10w51t0"}>
                                <CardContent>
                                    <Typography style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif", "margin": "auto"}} fontSize={32}>Получить письмо</Typography>
                                    <form onSubmit={requestRecoveryEmail}>
                                        <FormError isError={isError} errorMessage={errorMessage} />
                                        <Stack gap={1} style={{"marginTop":"10px"}}>
                                            <InputLabel style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif"}}>Email</InputLabel>
                                            <CustomInput size="lg" type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Введите email" />
                                        </Stack>
                                        <CustomButtonStyled onClick={requestRecoveryEmail}><Typography>Отправить</Typography></CustomButtonStyled>
                                    </form>
                                </CardContent>
                            </DefaultCard>
                        </Stack>
                        <Infographic titleFloat="left" textFloat="left" title="about"
                                     text="Yusra была сформирована в 2024 году активными сторонниками мира WEB3 технологий. Вместе с сообществом мы можем создавать лучшие продукты DeFi на мировом рынке. Мы открыты к сотрудничеству и рады принять новых членов команды. Присоединяйся к нам, чтобы создать будущее WEB3."/>
                    </>
                }
                {isRecoveryLink &&
                    <>
                        <Stack style={{"width":"100%", "display":"flex", "alignItems":"center"}} mt={10} gap={7}>
                                <DefaultCard className={"glass svelte-10w51t0"}>
                                    <CardContent>
                                        <Typography style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif", "margin": "auto"}} fontSize={32}>Установите пароль</Typography>
                                        <Stack gap={1} style={{"marginTop":"10px"}}>
                                            <TextField id="newPassword" style={{"width":"100%", "marginTop":"10px"}} error={!passwordValid} helperText={helperText} onChange={(event) => { handleNewPasswordChange(event) }} value={newPassword} type="text" placeholder="Новый пароль"/>
                                            <TextField id="newPasswordConfirm" style={{"width":"100%", "marginTop":"10px"}} error={!passwordsMatch} helperText={!passwordsMatch ? "Пароли не совпадают" : ""} onChange={(event) => { handleConfirmPasswordChange(event) }} value={confirmPassword} type="text" placeholder="Подтвердите новый пароль"/>
                                            {tfaRequired && <Stack gap={1} style={{"marginTop":"10px"}}>
                                                <InputLabel style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif"}}>2FA Код</InputLabel>
                                                <CustomInput size="lg" type="text" value={totpCode} onChange={(event) => {setTotpCode(event.target.value)}} placeholder="Введите 2FA код" />
                                            </Stack>}
                                            <CustomButtonStyled onClick={handleSubmit}><Typography>Отправить</Typography></CustomButtonStyled>
                                        </Stack>
                                    </CardContent>
                                </DefaultCard>
                        </Stack>
                        <Infographic titleFloat="left" textFloat="left" title="about"
                                     text="Yusra была сформирована в 2024 году активными сторонниками мира WEB3 технологий. Вместе с сообществом мы можем создавать лучшие продукты DeFi на мировом рынке. Мы открыты к сотрудничеству и рады принять новых членов команды. Присоединяйся к нам, чтобы создать будущее WEB3."/>
                    </>
                }
            </PageContent>
        </Wrapper>
    )
}