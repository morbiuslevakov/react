import React, {useContext, useEffect, useRef, useState} from "react";
import { Navigate, Link } from "react-router-dom";
import { Stack, Typography, InputLabel, Box } from "@mui/material";
import { CustomInput, PageContent, Wrapper } from "../../components/auth-pages/Styled";
import { RedirectLink } from "../../components/auth-pages/RedirectLink";
import { FormError } from "../../components/auth-pages/FormError";
import { PasswordAddornment } from "../../components/auth-pages/PasswordAddornment";
import { useLogin } from "../../hooks/use-login";
import UserContext from "../../context/user-context";
import { ConfirmEmail } from "../../components/auth-pages/ConfirmEmail";
import { DefaultCard, CardContent } from '../Styled';
import { CustomButton } from '../../components/CustomButton';
import {TelegramCard}  from '../../components/telegram-card/TelegramCard';
import { Infographic } from '../../components/infogrphic/Infographic';

export const Login = () => {
    const { states, changeHandlers, handleLogin, togglePasswordVisible, setConfirmEmail } = useLogin()
    const { user } = useContext(UserContext)

    if (user) {
        return <Navigate to={'/'} />
    }

    return (
        <Wrapper>
            <PageContent>
                <Stack style={{"width":"100%", "display":"flex", "alignItems":"center"}} mt={10} gap={7}>
                    <ConfirmEmail email={states.email} open={states.confirmEmail} onClose={setConfirmEmail} />
                    <DefaultCard className={"glass svelte-10w51t0"}>
                        <CardContent>
                            <Typography style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif", "margin": "auto"}} fontSize={32}>Войти в аккаунт</Typography>
                            <form onSubmit={handleLogin}>
                                <FormError isError={states.isError} errorMessage={states.errorMessage} />
                                <Stack gap={1} style={{"marginTop":"10px"}}>
                                    <InputLabel style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif"}}>Email</InputLabel>
                                    <CustomInput size="lg" type="text" value={states.email} onChange={changeHandlers.email} placeholder="Введите email" />
                                </Stack>
                                <Stack gap={1} style={{"marginTop":"10px"}}>
                                    <InputLabel style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif"}}>Пароль</InputLabel>
                                    <CustomInput size="lg" type={states.passwordType} value={states.password} onChange={changeHandlers.password}
                                        placeholder="Введите пароль" endAdornment={<PasswordAddornment callback={togglePasswordVisible} isVisible={states.showPassword} />} />
                                </Stack>
                                {states.faRequired && <Stack gap={1} style={{"marginTop":"10px"}}>
                                    <InputLabel style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif"}}>2fa Код</InputLabel>
                                    <CustomInput size="lg" type="text" value={states.fa} onChange={changeHandlers.fa} placeholder="Введите 2fa код" />
                                </Stack>}
                                <CustomButton text="Войти" />
                            </form>
                            <RedirectLink text="Нет аккаунта?" linkText="Создать аккаунт" link="/register" />
                            <Link style={{"fontFamily":"Montserrat, sans-serif", "margin": "auto", "marginTop":"5px"}} to={`/forget-password?email=${states.email}`}>Забыли пароль?</Link>
                        </CardContent>
                    </DefaultCard>
                </Stack>
                <Infographic titleFloat="left" textFloat="left" title="about"
                             text="Yusra была сформирована в 2024 году активными сторонниками мира WEB3 технологий. Вместе с сообществом мы можем создавать лучшие продукты DeFi на мировом рынке. Мы открыты к сотрудничеству и рады принять новых членов команды. Присоединяйся к нам, чтобы создать будущее WEB3."/>
                {/*<Stack style={{"width":"100%", "alignItems":"center"}} mt={10} gap={7}>*/}
                {/*    <Box style={{"width": "100%"}}>*/}
                {/*        <TelegramCard />*/}
                {/*    </Box>*/}
                {/*</Stack>*/}
            </PageContent>
        </Wrapper>
    )
}