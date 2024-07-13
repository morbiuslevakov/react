import React from "react";
import { DefaultCard, CardContent } from "../../pages/Styled";
import { Typography } from "@mui/material";
import {AuthMethod} from "../AuthMethod";
import { PasswordIcon } from "../../pages/wallet/icons/PasswordIcon";
import { MailIcon } from "../../pages/wallet/icons/MailIcon";
import { AuthIcon } from "../../pages/wallet/icons/AuthIcon";

export const Security = ({ user }) => {

    return (
        <DefaultCard className={"glass svelte-10w51t0 wallet-card"}>
            <CardContent style={{"display":"flex", "alignItems":"start"}}>
                <Typography fontSize={"2rem"} fontWeight={500} color={"#717171"}>Двухфакторная аутентификация (2FA)</Typography>
                {/*<AuthMethod icon={<MailIcon />} title={"Эл. почта"} text={"Используйте свой адрес эл. почты для защиты своего аккаунта и транзакций."} link={"/manage-email"}/>*/}
                <AuthMethod icon={<AuthIcon />} title={"Приложение Authenticator"} text={"Используйте Google Authenticator для защиты своего аккаунта и транзакций."} link={"/manage-authenticator"}/>
                <AuthMethod icon={<PasswordIcon />} title={"Пароль для входа"} text={"Этот пароль используется для входа в ваш аккаунт."} link={"/manage-password"}/>
            </CardContent>
        </DefaultCard>
    );
}