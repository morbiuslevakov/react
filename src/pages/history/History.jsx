import React, { useContext } from "react";
import { Stack, Typography } from "@mui/material";
import { Navigate, Link } from "react-router-dom";
import { PageContent, Wrapper } from "../../components/auth-pages/Styled";
import UserContext from "../../context/user-context";
import { DefaultCard, CardContent } from '../Styled';
import { BackArrowIcon } from '../wallet/icons/BackArrow';
import { SnackbarProvider } from "notistack";
import { Transaction } from '../../components/transaction/Transaction';
import { useHistory } from "../../hooks/use-history";

export const History = () => {
    const { transactions } = useHistory();
    const { user } = useContext(UserContext);

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
                                <Stack style={{"color": "#717171!important"}}>
                                    {transactions.length !== 0 && transactions.reverse().map((transaction) => (
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