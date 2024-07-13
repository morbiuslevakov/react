import React, {useContext, useEffect, useState} from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import {CustomInput, PageContent, Wrapper} from "../../components/auth-pages/Styled";
import UserContext from "../../context/user-context";
import { Infographic } from '../../components/infogrphic/Infographic';
import { resendConfirmApi, confirmAccount } from '../../utils/api-utils';
import { FormError } from "../../components/auth-pages/FormError";
import { InputLabel, Stack } from "@mui/material";
import { authErrorMessages } from "../../constants/auth";

export const ConfirmAccount = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const [email, setEmail] = useState(params.get('email'))
    const [token, setToken] = useState("");
    const [isToken, setIsToken] = useState(false);
    const [isError, setIsError] = useState(false);
    const [confirmed, setConfirmed] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const onClickBack = () => {
        navigate("/login");
        window.location.reload();
    }

    const handleResend = async () => {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setIsError(true);
            setErrorMessage(authErrorMessages.email);
            return;
        }
        resendConfirmApi(email).then();
        navigate("/login");
        window.location.reload();
    }

    useEffect(() => {
        if (params.get("token") !== null) {
            setIsToken(true);
            confirmAccount(params.get("token")).then((response) => {
                setConfirmed(true);
            }).catch((error) => {
                throw error;
            });
        }
    }, [email, token]);

    if (user) {
        return <Navigate to={'/'} />
    }

    return (
        <Wrapper>
            <PageContent style={{paddingTop: "100px"}}>
                {!isToken &&
                    <>
                        <Infographic title="" titleFloat="left" textFloat="right" text={<>Привествуем, <strong>{email}</strong>!<br/>
                            Подтвердите адрес электронной почты прежде чем войти. Мы прислали письмо с ссылкой для
                            подтверждения на вашу почту. Если вы не получили письмо вы можете запросить его снова нажав
                            на кнопку ниже. Не забудьте проверить папку "Спам". С Уважением, команда YUSRA 👋</>}/>
                        <FormError isError={isError} errorMessage={errorMessage} />
                        <Stack gap={1} style={{"marginTop": "10px", width: "100%", alignItems: "center"}}>
                            <CustomInput style={{width: "70%"}} size="lg" type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Введите email" />
                        </Stack>
                        <div style={{"width": "100%", "display": "flex", "flexDirection":"column"}}>
                            <button onClick={handleResend} style={{"border": "none", "backgroundColor": "unset", "margin": "auto", width: "70%"}}>
                                <p className="link svelte-1na1a25 primary shadow">Отправить снова</p>
                            </button>
                            <button onClick={onClickBack} style={{"border": "none", "backgroundColor": "unset", "margin": "auto", width: "70%"}}>
                                <p className="link svelte-1na1a25 primary shadow">Вернуться</p>
                            </button>
                        </div>
                    </>
                }
                {(isToken && confirmed) &&
                    <>
                        <Infographic title="" titleFloat="left" textFloat="right" text={<>Привествуем, <strong>{email}</strong>!<br/>
                            Ваш аккаунт подтвержден, теперь вы можете выполнить вход. С Уважением, команда YUSRA 👋</>}/>
                        <div style={{"width": "100%", "display": "flex", "flexDirection":"column"}}>
                            <button onClick={() => {
                                navigate("/login");
                                window.location.reload();
                            }} style={{"border": "none", "backgroundColor": "unset", "margin": "auto", width: "70%"}}>
                                <p className="link svelte-1na1a25 primary shadow">На страницу логина</p>
                            </button>
                        </div>
                    </>
                }
            </PageContent>
        </Wrapper>
    );
};