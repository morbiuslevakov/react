import React, { useContext } from "react";
import {Paper, Stack, Table, TableBody, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import { Navigate, Link } from "react-router-dom";
import { PageContent, Wrapper } from "../../components/auth-pages/Styled";
import UserContext from "../../context/user-context";
import { DefaultCard, CardContent } from '../Styled';
import { BackArrowIcon } from '../wallet/icons/BackArrow';
import { SnackbarProvider } from "notistack";
import { Card } from '../../components/deposit-cards/Card';
import { Infographic } from '../../components/infogrphic/Infographic';
import {HistoryIcon} from "../wallet/icons/HistoryIcon";
import { StyledTableCell, StyledTableRow } from "../Styled";

export const Deposit = () => {
    const { user } = useContext(UserContext);

    function createData(
        name: string,
        calories: string,
        fat: number,
        carbs: number,
        protein: number,
    ) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('1', "по 1% в месяц"),
        createData('2', "по 2% в месяц"),
        createData('3', "по 3% в месяц"),
        createData('4', "по 4% в месяц")
    ];

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
                                <Typography style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif", "display":"block", "marginRight":"auto"}} fontSize={"1.25rem"}>
                                    Нажмите на кнопку ниже чтобы скопировать адрес:
                                </Typography>
                                <Stack style={{"color": "#717171!important"}}>
                                    <Card address={user.wavesAddress} network="WAVES" blocks="1" minSum="10" time="1" fee="5"/>
                                    {/*<Card address={user.solanaAddress} network="SOLANA" blocks="1" minSum="10" time="2" fee="0"/>*/}
                                </Stack>
                            </CardContent>
                        </DefaultCard>
                    </Stack>
                    <Typography style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif", "display":"block", "marginRight":"auto"}} fontSize={"1.5rem"}>
                        Периоды разморозки токенов YSR
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>ГОД</StyledTableCell>
                                    <StyledTableCell align="right">ПРОЦЕНТ В МЕСЯЦ</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Infographic titleFloat="right" textFloat="left" title="Swap"
                                 text="уважаемые пользователи, просим обратить внимание на то, что при переводе токенов YUSRA на Waves адрес, токены будут сожжены а вместо них вы получите обновленный токен YUSRA в сети TON в соотношении 1 к 1"/>
                    <Infographic titleFloat="left" textFloat="left" title="Freeze"
                                 text="из обменянных токенов в первый месяц к выводу будет доступен 1%, остальные токены будут заморожены. Токены будут размораживаться в 4 этапа с момента свапа, по 1/2/3/4% в месяц в первый, второй, третий и четвертый год соответсвенно"/>
                </PageContent>
            </SnackbarProvider>
        </Wrapper>
    );
}
