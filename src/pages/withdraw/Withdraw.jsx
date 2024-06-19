import React from "react";
import { Link, Navigate } from "react-router-dom";
import { PageContent, Wrapper } from "../../components/auth-pages/Styled";
import { SnackbarProvider } from "notistack";
import { CardContent, DefaultCard } from "../Styled";
import { Stack, TextField, Typography } from "@mui/material";
import { BackArrowIcon } from "../wallet/icons/BackArrow";
import { HistoryIcon } from "../wallet/icons/HistoryIcon";
import { CustomButton } from "../../components/CustomButton";
import { Infographic } from '../../components/infogrphic/Infographic';
import { useWithdraw } from "../../hooks/use-withdraw";

export const Withdraw = () => {
    const { data, user, states, changeHandlers, handleWithdraw } = useWithdraw();

    if (!user) {
        return <Navigate to={'/login'} />;
    }

    return (
        <Wrapper style={{"backgroundImage":"url(https://s3.timeweb.com/24581035-081cc679-ce58-4307-808e-bb42d83baee6/plane.svg)", "backgroundRepeat":"no-repeat", "backgroundAttachment":"fixed", "width":"100%", "height":"100%", "top":0, "left":0}}>
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
                                <form onSubmit={handleWithdraw}>
                                    <Stack style={{"width":"100%", "display":"flex", "alignItems":"start"}}>
                                        <TextField style={{"width":"100%", "marginTop":"10px"}} onChange={(e) => { changeHandlers.address(e) }} error={!states.isValidAddress} helperText={states.isValidAddress ? "" : "Неверный адрес"} value={states.address} type="text" placeholder="Адрес"/>
                                        <TextField style={{"width":"100%", "marginTop":"10px"}} onChange={(e) => { changeHandlers.amount(e) }} error={!states.isValidAmount} helperText={states.amountErrorMessage} value={states.amount} type="number" placeholder="Сумма вывода"/>
                                        <TextField style={{"width":"100%", "marginTop":"10px"}} onChange={(e) => { changeHandlers.memo(e) }} value={states.memo} type="text" placeholder="Мемо-фраза"/>
                                        <Typography className="subtitle" style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif", "marginTop":"10px"}} fontSize={"1rem"}>
                                            Доступно: {data.free} YUSRA
                                        </Typography>
                                        <Typography className="subtitle" style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif", "marginTop":"10px"}} fontSize={"1rem"}>
                                            Комиссия: 5 YUSRA
                                        </Typography>
                                        <CustomButton type="submit" text="Вывод"/>
                                    </Stack>
                                </form>
                            </CardContent>
                        </DefaultCard>
                    </Stack>
                    <Infographic titleFloat="right" textFloat="left" title=""
                                 text="будьте осторожны при осуществлении вывода средств и внимательно проверьте адрес получателя. С Уважением, команда YUSRA 👋"/>
                </PageContent>
            </SnackbarProvider>
        </Wrapper>
    );
}
