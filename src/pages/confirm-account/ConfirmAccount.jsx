import React, { useContext } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { PageContent, Wrapper } from "../../components/auth-pages/Styled";
import UserContext from "../../context/user-context";
import { Infographic } from '../../components/infogrphic/Infographic';
import { resendConfirmApi } from '../../utils/api-utils';

export const ConfirmAccount = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const email = params.get('email');

    if (user) {
        return <Navigate to={'/'} />
    }

    const onClickBack = () => {
        navigate("/login");
        window.location.reload();
    }

    const handleResend = async () => {
        navigate("/login");
        window.location.reload();
        resendConfirmApi(email).then();
    }

    return (
        <Wrapper>
            <PageContent style={{"height":"100vh"}}>
                    <Infographic title="" titleFloat="left" textFloat="right" text={<>Привествуем, <strong>{email}</strong>!<br/>
                Подтвердите адрес электронной почты прежде чем войти. Мы прислали письмо с ссылкой для
                подтверждения на вашу почту. Если вы не получили письмо вы можете запросить его снова нажав
                на кнопку ниже. Не забудьте проверить папку "Спам". С Уважением, команда YUSRA 👋</>}/>
                <div style={{"margin": "auto", "width": "100%", "display": "flex", "flexDirection":"column"}}>
                    <button onClick={handleResend} style={{"border": "none", "backgroundColor": "unset", "margin": "auto"}}>
                        <p style={{"minWidth": "200px"}} className="link svelte-1na1a25 primary shadow">Отправить снова</p>
                    </button>
                    <button onClick={onClickBack} style={{"border": "none", "backgroundColor": "unset", "margin": "auto"}}>
                        <p style={{"minWidth": "200px"}} className="link svelte-1na1a25 primary shadow">Вернуться</p>
                    </button>
                </div>
            </PageContent>
        </Wrapper>
    );
};