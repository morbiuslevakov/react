import React, {useCallback, useContext, useEffect, useState} from "react";
import {Box, Paper, Stack, styled, Typography} from "@mui/material";
import { Navigate, Link } from "react-router-dom";
import { PageContent, Wrapper } from "../../components/auth-pages/Styled";
import UserContext from "../../context/user-context";
import { DefaultCard, CardContent } from '../Styled';
import { BackArrowIcon } from '../wallet/icons/BackArrow';
import { SnackbarProvider } from "notistack";
import { Transaction } from '../../components/transaction/Transaction';
import { useHistory } from "../../hooks/use-history";
import {useApiRequest} from "../../hooks/use-api-request";
import {getTransactions} from "../../utils/api-utils";

const ScrollContainer = styled(Box)({
    display: 'flex',
    overflowX: 'auto',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
    scrollbarWidth: 'none',
});

const RoundedItem = styled(Paper)(({ theme, selected }) => ({
    borderRadius: '35px',
    padding: theme.spacing(1.5),
    margin: theme.spacing(1),
    minWidth: '150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    cursor: 'pointer',
    color: selected ? "#ffffff" : "#717171",
    backgroundColor: selected ? "#004444" : "#ffffff"
}));

export const History = () => {
    const [type, setType] = useState('SWAP');
    const [transactions, setTransactions] = useState([]);
    const { user } = useContext(UserContext);
    const apiRequest = useApiRequest();

    const fetchData = useCallback(async (fetchType) => {
        try {
            const resData = await apiRequest(getTransactions, type);
            setTransactions(resData)
        } catch (error) {
            console.log(error)
        }
    }, [apiRequest, type])

    useEffect(() => {
        fetchData(type).then();
    }, [fetchData, type]);

    if (!user) {
        return <Navigate to={'/login'} />;
    }

    return (
        <Wrapper style={{"backgroundImage":"url(https://s3.timeweb.com/24581035-081cc679-ce58-4307-808e-bb42d83baee6/history.svg)", "backgroundRepeat":"no-repeat", "backgroundAttachment":"fixed", "width":"100%", "height":"100vh", "top":0, "left":0}}>
            <SnackbarProvider maxSnack={2}>
                <PageContent>
                    <Stack mt={10} gap={7}>
                        <DefaultCard className={"glass svelte-10w51t0"}>
                            <CardContent style={{"display": "block!important", "alignItems": "left"}}>
                                <Stack style={{"marginBottom": "30px", "display":"block"}}>
                                    <Link to="/wallet" style={{"display": "flex", "float": "left"}}>
                                        <BackArrowIcon/>
                                    </Link>
                                </Stack>
                                <ScrollContainer>
                                    <RoundedItem selected={type === "SWAP"} onClick={() => {
                                        setType('SWAP');
                                    }}>
                                        <Typography color={"inherit"}>Входящие</Typography>
                                    </RoundedItem>
                                    <RoundedItem selected={type === "EXTERNAL_WITHDRAW"} onClick={() => {
                                        setType('EXTERNAL_WITHDRAW');
                                    }}>
                                        <Typography color={"inherit"}>Исходящие</Typography>
                                    </RoundedItem>
                                    <RoundedItem selected={type === "REFERRAL_REWARD"} onClick={() => {
                                        setType('REFERRAL_REWARD');
                                    }}>
                                        <Typography color={"inherit"}>Реферальный бонус</Typography>
                                    </RoundedItem>
                                </ScrollContainer>
                                <Stack style={{"color": "#717171!important"}}>
                                    {transactions.length !== 0 && transactions.map((transaction) => (
                                            <>
                                                <Transaction type={transaction.type} date={transaction.date} amount={transaction.amount} fee={transaction.fee}/>
                                                <hr/>
                                            </>
                                        )
                                    )}
                                    {transactions.length === 0 && <Typography style={{"display":"flex", "margin":"auto", "color":"#717171", "fontFamily":"Montserrat, sans-serif"}} fontSize={"1.5rem"}>Пока ничего нет...</Typography>}
                                </Stack>
                            </CardContent>
                        </DefaultCard>
                    </Stack>
                </PageContent>
            </SnackbarProvider>
        </Wrapper>
    );
}