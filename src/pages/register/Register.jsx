import React, { useContext } from "react";
import {Navigate} from "react-router-dom";
import {Box, InputLabel, Stack, Typography} from "@mui/material";
import { CardContent, CustomInput, PageContent, Wrapper } from "../../components/auth-pages/Styled";
import { RedirectLink } from "../../components/auth-pages/RedirectLink";
import { FormError } from "../../components/auth-pages/FormError";
import { PasswordAddornment } from "../../components/auth-pages/PasswordAddornment";
import { useRegister } from "../../hooks/use-register";
import UserContext from "../../context/user-context";
import {DefaultCard} from "../Styled";
import {CustomButton} from "../../components/CustomButton";
import {Infographic} from "../../components/infogrphic/Infographic";
import {TelegramCard} from "../../components/telegram-card/TelegramCard";

export const Register = () => {
    const { states, changeHandlers, handleRegister, togglePasswordVisible } = useRegister();
    const { user } = useContext(UserContext);

    if (user) {
        return <Navigate to={'/'} />
    }

    return (
        <Wrapper>
            <PageContent>
                <Stack style={{"width":"100%", "display":"flex", "alignItems":"center"}} mt={10} gap={7}>
                    <DefaultCard className={"glass svelte-10w51t0"}>
                        <CardContent>
                            <Typography style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif", "margin": "auto"}} fontSize={32}>Создать аккаунт</Typography>
                            <form style={{"width":"100%"}} onSubmit={handleRegister}>
                                <FormError isError={states.isError} errorMessage={states.errorMessage} />
                                <Stack gap={1} style={{"marginTop":"10px"}}>
                                    <InputLabel style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif"}}>Email</InputLabel>
                                    <CustomInput size="lg" type="text" value={states.email} onChange={changeHandlers.email} placeholder="Введите email" />
                                </Stack>
                                <Stack gap={1} style={{"marginTop":"10px"}}>
                                    <InputLabel style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif"}}>Пароль</InputLabel>
                                    <CustomInput size="lg" type={states.passwordType} value={states.password} onChange={changeHandlers.password}
                                                 placeholder="Введите пароль"  endAdornment={<PasswordAddornment callback={togglePasswordVisible} isVisible={states.showPassword} />}/>
                                </Stack>
                                <CustomButton text="Создать аккаунт" />
                            </form>
                            <RedirectLink text="Уже заргестрированы?" linkText="Войти" link="/login" />
                        </CardContent>
                    </DefaultCard>
                </Stack>
                <Infographic titleFloat="left" textFloat="left" title="about"
                             text="Yusra была сформирована в 2024 году активными сторонниками мира WEB3 технологий. Вместе с сообществом мы можем создавать лучшие продукты DeFi на мировом рынке. Мы открыты к сотрудничеству и рады принять новых членов команды. Присоединяйся к нам, чтобы создать будущее WEB3."/>
                <Stack style={{"width":"100%", "alignItems":"center"}} mt={10} gap={7}>
                    <Box style={{"width": "100%"}}>
                        <TelegramCard />
                    </Box>
                </Stack>
            </PageContent>
        </Wrapper>
    );
};