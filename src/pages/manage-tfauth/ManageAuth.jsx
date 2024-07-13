import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import {
    Box,
    Button,
    Stack,
    Typography
} from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import { PageContent, Wrapper } from "../../components/auth-pages/Styled";
import { useWallet } from "../../hooks/use-wallet";
import { SnackbarProvider, useSnackbar } from "notistack";
import { CardContent, DefaultCard } from "../Styled";
import { BackArrowIcon } from "../wallet/icons/BackArrow";
import axios from "axios";
import { apiConfig } from "../../utils/api-utils";
import { enableGoogleAuth, disableGoogleAuth } from "../../utils/api-utils";
import { AuthIcon } from "../wallet/icons/AuthIcon";
import { QRCodeScanning } from "../../components/dialogs/QRCodeScanning";
import { AuthCheck } from "../../components/dialogs/AuthCheck";
import { AuthDeleteWarning } from "../../components/dialogs/AuthDeleteWarning";
import { AuthDeleteCheck } from "../../components/dialogs/AuthDeleteCheck";

const StyledButton = styled(Button)(({theme}) => ({
    textTransform: "math-auto",
    marginTop: "20px",
    width: '100%',
    backgroundColor: "#004444",
    height: "48px",
    "&:hover": {
        backgroundColor: "#08694d"
    },
}))

const apiUrl = "https://api.yusra.community/v1";

export const ManageAuth = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [secret, setSecret] = useState("");
    const [imageData, setImageData] = useState("");
    const { user } = useWallet();
    const [totpCode, setTotpCode] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [openQRCodeScan, setOpenQRCodeScan] = useState(false);
    const [openAuthCheck, setOpenAuthCheck] = useState(false);
    const [openAuthDeleteWarning, setOpenAuthDeleteWarning] = useState(false);
    const [openAuthDeleteCheck, setOpenAuthDeleteCheck] = useState(false);

    const handleClickEnableTfauth = async () => {
    const url = `${apiUrl}/user/enable-tfauth`;
    await axios.get(url, apiConfig).then((response) => {
        setSecret(response.data.secret);
        setImageData(response.data.qrCodeURI);
    }).catch((error) => {
        if (error.response.data === "First confirm your email") {
            enqueueSnackbar("Необходимо подтвердить почту", {
                variant: "warning",
                autoHideDuration: 2000,
                anchorOrigin: { vertical: "top", horizontal: "right" }
            });
        }
    })
        setOpenQRCodeScan(true);
    };


    const handleAuthCheck = () => {
        const formData = JSON.stringify({ totpCode: totpCode })
        enableGoogleAuth(formData).then((response) => {
            setTotpCode("");
            setPassword("");
            setIsError(false);
            setErrorMessage("");
            setOpenAuthCheck(false);
            let user = JSON.parse(localStorage.getItem("user"));
            user.usingGoogleAuth = true;
            user.googleAuthAdded = Date.now();
            localStorage.setItem("user", JSON.stringify(user));
            window.location.reload();
        }).catch(error => {
            setErrorMessage(error.response.data);
            setIsError(true);
        });
    };

    const handleAuthDeleteCheck = () => {
        const formData = JSON.stringify({ totpCode: totpCode, password: password })
        disableGoogleAuth(formData).then((response) => {
            setTotpCode("");
            setPassword("");
            setIsError(false);
            setErrorMessage("");
            setOpenAuthDeleteCheck(false);
            let user = JSON.parse(localStorage.getItem("user"));
            user.usingGoogleAuth = false;
            user.googleAuthAdded = Date.now();
            localStorage.setItem("user", JSON.stringify(user));
            window.location.reload();
        }).catch(error => {
            setErrorMessage(error.response.data);
            setIsError(true);
        });
    }

    if (!user) {
        return <Navigate to={'/login'} />;
    }

    return (
        <Wrapper style={{"backgroundImage":"url(https://s3.timeweb.com/24581035-081cc679-ce58-4307-808e-bb42d83baee6/yusra.svg)", "backgroundRepeat":"no-repeat", "backgroundAttachment":"fixed", "width":"100%", "height":"100vh", "top":0, "right":0}}>
            <SnackbarProvider maxSnack={2}>
                <PageContent>
                    <Stack mt={10} gap={7}>
                        <DefaultCard className={"glass svelte-10w51t0 wallet-card"}>
                            <CardContent style={{"display":"flex", "alignItems":"start"}}>
                                <Stack style={{"marginBottom": "10px", "display":"block"}}>
                                    <Link to={"/profile"} style={{"display": "flex", "float": "left"}}>
                                        <BackArrowIcon/>
                                    </Link>
                                </Stack>
                                <Stack style={{width: "100%"}}>
                                    <Typography fontSize={"2rem"} fontWeight={500} color={"#717171"} style={{"marginBottom": "10px"}}>
                                        Приложение Authenticator
                                    </Typography>
                                    {user.usingGoogleAuth &&
                                        <>
                                            <Box style={{display: "flex", alignItems: "center", width: "100%", marginTop:"20px"}}>
                                                <Box display="flex" alignItems="center">
                                                    <AuthIcon />
                                                </Box>
                                                <Box style={{display: "flex", marginLeft: "20px"}} alignItems="center">
                                                    <Typography>
                                                        <span style={{fontSize: "1.1rem", color: "#717171", fontWeight: 600}}>Authenticator</span><br/>
                                                        <span style={{fontSize: "1rem", color: "#004444"}}>У вас уже есть действующий метод аутентификации</span>
                                                    </Typography>
                                                </Box>
                                                <Button onClick={() => {
                                                    setOpenAuthDeleteWarning(true)
                                                }} style={{marginLeft: "auto"}} variant="contained" color="primary">
                                                    Удалить
                                                </Button>
                                            </Box>
                                        </>
                                    }
                                    {!user.usingGoogleAuth &&
                                        <>
                                            <Typography fontSize={"1rem"} fontWeight={500} color={"#717171"}>
                                                Чтобы не ждать текстовые сообщения, получайте проверочные коды через приложение-аутентификатор, например Google Authenticator. Приложение работает, даже если ваш телефон находится в автономном режиме.
                                            </Typography>
                                            <StyledButton onClick={handleClickEnableTfauth}><Typography>Включить приложение Authenticator</Typography></StyledButton>
                                        </>
                                    }
                                </Stack>
                            </CardContent>
                        </DefaultCard>
                    </Stack>
                    <QRCodeScanning setOpenQRCodeScan={setOpenQRCodeScan} setOpenAuthCheck={setOpenAuthCheck} openQRCodeScan={openQRCodeScan} imageData={imageData} secret={secret} />
                    <AuthCheck setOpenAuthCheck={setOpenAuthCheck} handleAuthCheck={handleAuthCheck} openAuthCheck={openAuthCheck} errorMessage={errorMessage} isError={isError} setTotpCode={setTotpCode} totpCode={totpCode} />
                    <AuthDeleteWarning setOpenAuthDeleteWarning={setOpenAuthDeleteWarning} openAuthDeleteWarning={openAuthDeleteWarning} setOpenAuthDeleteCheck={setOpenAuthDeleteCheck} />
                    <AuthDeleteCheck totpCode={totpCode} setTotpCode={setTotpCode} password={password} setPassword={setPassword} openAuthDeleteCheck={openAuthDeleteCheck} isError={isError} errorMessage={errorMessage} handleAuthDeleteCheck={handleAuthDeleteCheck} setOpenAuthDeleteCheck={setOpenAuthDeleteCheck} />
                </PageContent>
            </SnackbarProvider>
        </Wrapper>
    );
}