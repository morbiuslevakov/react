import React, { useContext } from "react";
import { Stack } from "@mui/material";
import { Navigate, Link } from "react-router-dom";
import { PageContent, Wrapper } from "../../components/auth-pages/Styled";
import UserContext from "../../context/user-context";
import { DefaultCard, CardContent } from '../Styled';
import { BackArrowIcon } from '../wallet/icons/BackArrow';
import { SnackbarProvider } from "notistack";
import { Card } from '../../components/deposit-cards/Card';
import { Infographic } from '../../components/infogrphic/Infographic';
import {HistoryIcon} from "../wallet/icons/HistoryIcon";

export const Deposit = () => {
    const { user } = useContext(UserContext);

    if (!user) {
        return <Navigate to={'/login'} />;
    }

    return (
        <Wrapper style={{"backgroundImage":"url(https://s3.timeweb.com/24581035-081cc679-ce58-4307-808e-bb42d83baee6/cat.svg)", "backgroundRepeat":"no-repeat", "backgroundAttachment":"fixed", "width":"100%", "height":"100%", "top":0, "left":0}}>
            <SnackbarProvider maxSnack={2}>
                <PageContent>
                    <Stack mt={10} gap={7}>
                        <DefaultCard className={"glass svelte-10w51t0"}>
                            <CardContent style={{"display": "block!important", "alignItems": "left"}}>
                                <Stack style={{"marginBottom": "30px", "display":"block"}}>
                                    <Link to={"/wallet"} style={{"display": "flex", "float": "left"}}>
                                        <BackArrowIcon/>
                                    </Link>
                                    <Link to={"/history"} style={{"display": "flex", "float": "right"}}>
                                        <HistoryIcon />
                                    </Link>
                                </Stack>
                                <Stack style={{"color": "#717171!important"}}>
                                    <Card address={user.wavesAddress} network="WAVES" blocks="1" minSum="10" time="1" fee="5"/>
                                    {/*<Card address={user.solanaAddress} network="SOLANA" blocks="1" minSum="10" time="2" fee="0"/>*/}
                                </Stack>
                            </CardContent>
                        </DefaultCard>
                    </Stack>
                    <Infographic titleFloat="right" textFloat="left" title="Swap"
                                 text="уважаемые пользователи, просим обратить внимание на то, что при переводе токенов YUSRA на Waves адрес, токены будут сожжены а вместо них вы получите обновленный токен YUSRA в сети Solana в соотношении 1 к 1"/>
                    <Infographic titleFloat="left" textFloat="left" title="Freeze"
                                 text="из обменянных токенов к выводу будет доступно 10%, остальные токены будут заморожены. Токены будут размораживаться по 10% каждые 3 месяца с момента свапа"/>
                </PageContent>
            </SnackbarProvider>
        </Wrapper>
    );
}