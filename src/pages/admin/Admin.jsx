import React, {useContext} from "react";
import { Pagination, Stack, Typography } from "@mui/material";
import {Link, Navigate} from "react-router-dom";
import { PageContent, Wrapper } from "../../components/auth-pages/Styled";
import UserContext from "../../context/user-context";
import { DefaultCard, CardContent } from '../Styled';
import { SnackbarProvider } from "notistack";
import { useAdmin } from "../../hooks/use-admin";

export const Admin = () => {
    const { user } = useContext(UserContext);
    const { data, page, setPage } = useAdmin();

    const handleChange = (event, value) => {
        setPage(value);
    }

    // const page = 10;
    // const setPage = null;
    // const data = {
    //     pages: 300,
    //     users: [
    //         {
    //             email: "deaslide@gmail.com",
    //             free: "100",
    //             withdrawn: "1000",
    //             total: "30000"
    //         },
    //         {
    //             email: "deaslide@gmail.com",
    //             free: "100",
    //             withdrawn: "1000",
    //             total: "30000"
    //         }
    //     ]
    // }


    if (!user) {
        return <Navigate to={'/login'} />;
    }

    if (!data || !data.users) {
        return <div>Loading...</div>
    }

    return (
        <Wrapper style={{"backgroundImage":"url(https://s3.timeweb.com/24581035-081cc679-ce58-4307-808e-bb42d83baee6/cat.svg)", "backgroundRepeat":"no-repeat", "backgroundAttachment":"fixed", "width":"100%", "height":"100%", "top":0, "left":0}}>
            <SnackbarProvider maxSnack={2}>
                <PageContent>
                    <Stack mt={10} gap={7}>
                        <DefaultCard className={"glass svelte-10w51t0"}>
                            <CardContent style={{"display": "block!important", "alignItems": "left"}}>
                                {
                                    data.users && data.users.map((el) => (
                                        <Link to={`/admin/${el.email}`}>
                                            <Typography className="subtitle" style={{
                                                "color": "#717171",
                                                "fontFamily": "Montserrat, sans-serif",
                                                "display": "flex",
                                                "alignItems": "center"
                                            }} fontSize={"1"}>Почта: {el.email}</Typography>
                                            <Typography className="subtitle" style={{
                                                "color": "#717171",
                                                "fontFamily": "Montserrat, sans-serif",
                                                "display": "flex",
                                                "alignItems": "center"
                                            }} fontSize={"1"}>Обменяно: {el.total}</Typography>
                                            <Typography className="subtitle" style={{
                                                "color": "#717171",
                                                "fontFamily": "Montserrat, sans-serif",
                                                "display": "flex",
                                                "alignItems": "center"
                                            }} fontSize={"1"}>Выведено: {el.withdrawn}</Typography>
                                            <Typography className="subtitle" style={{
                                                "color": "#717171",
                                                "fontFamily": "Montserrat, sans-serif",
                                                "display": "flex",
                                                "alignItems": "center"
                                            }} fontSize={"1"}>Доступно: {el.free}</Typography>
                                            <hr className={"line"}/>
                                        </Link>
                                    ))
                                }
                                <Pagination count={data.pages} page={page} onChange={handleChange} style={{margin: "auto"}} />
                            </CardContent>
                        </DefaultCard>
                    </Stack>
                </PageContent>
            </SnackbarProvider>
        </Wrapper>
    );
}
