import React, {useCallback, useContext, useEffect, useState} from "react";
import { Stack, Typography } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import { PageContent, Wrapper } from "../../components/auth-pages/Styled";
import UserContext from "../../context/user-context";
import { DefaultCard, CardContent } from '../Styled';
import { SnackbarProvider } from "notistack";
import { BackArrowIcon } from "../wallet/icons/BackArrow";
import { HeaderMenuItem } from "../../components/header/Styled";
import { Transaction } from "../../components/transaction/Transaction";
import { useApiRequest } from "../../hooks/use-api-request";
import { getLastTransactions } from "../../utils/api-utils";

export const Transactions = () => {
    const { user } = useContext(UserContext);
    const [transactions, setTransactions] = useState([]);
    const apiRequest = useApiRequest();

    const fetchData = useCallback(async () => {
        try {
            const resData = await apiRequest(getLastTransactions);
            setTransactions(resData)
        } catch (error) {
            console.log(error)
        }
    }, [apiRequest])

    useEffect(() => {
        fetchData().then();
    }, [fetchData]);


    if (!user) {
        return <Navigate to={'/login'} />;
    }

    return (
        <Wrapper style={{"backgroundImage":"url(https://s3.timeweb.com/24581035-081cc679-ce58-4307-808e-bb42d83baee6/cat.svg)", "backgroundRepeat":"no-repeat", "backgroundAttachment":"fixed", "width":"100%", height:"100%", "top":0, "left":0}}>
            <SnackbarProvider maxSnack={2}>
                <PageContent>
                    <Stack mt={10} gap={7}>
                        <DefaultCard className={"glass svelte-10w51t0"}>
                            <CardContent style={{"display": "block!important", "alignItems": "left"}}>
                                <Stack style={{"marginBottom": "30px", "display":"block"}}>
                                    <Link to="/" style={{"display": "flex", "float": "left"}}>
                                        <BackArrowIcon/>
                                    </Link>
                                </Stack>
                                <Stack style={{"marginBottom": "30px", "display":"block"}}>
                                    <HeaderMenuItem to="/admin" style={{"display": "flex", "float": "left"}}>
                                        <Typography style={{color: "#004444", textDecoration: "underline"}}>Список пользователей</Typography>
                                    </HeaderMenuItem>
                                </Stack>
                                <Stack style={{"color": "#717171!important"}}>
                                    {transactions.length !== 0 && transactions.map((transaction) => (
                                            <>
                                                <Transaction type={transaction.type} date={transaction.date} amount={transaction.amount} fee={transaction.fee} email={transaction.email}/>
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
