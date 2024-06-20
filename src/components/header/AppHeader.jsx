import React, { useContext, useEffect, useState } from "react";
import { Stack, Button } from "@mui/material";
import { Container, HeaderWrapper } from './Styled';
import UserContext from "../../context/user-context";
import { LogoutIcon } from "./LogoutIcon";
import { useNavigate } from 'react-router-dom';
import { HeaderLogo } from "../../pages/wallet/icons/HeaderLogo";
import { HeaderMenu } from "./HeaderMenu";
import { MobileMenu } from "./MobileMenu";
import { Link } from "react-router-dom";
import { useMediaQueryHook } from "../../hooks/use-media-query";

export const AppHeader = () => {
    const isMobile = useMediaQueryHook('sm')
    const [isLogged, setIsLogged] = useState(false)
    const navigate = useNavigate()
    const { user, logout } = useContext(UserContext)

    useEffect(() => {
        setIsLogged(!!user)
    }, [user])

    const handleLogout = () => {
        logout();
        navigate("/login");
        window.location.reload();
    }

    return (
        <HeaderWrapper>
            <Container>
                <Stack style={{"display":"flex!important"}} flexDirection="row" justifyContent={'space-between'} width={'100%'}>
                    <Stack style={{"display":"flex","width":"100%"}} flexDirection="row" gap={10}>
                        <Link to="/">
                            <HeaderLogo />
                        </Link>
                        {!isMobile && <HeaderMenu isLogged={isLogged} />}
                    </Stack>
                    {isMobile && <MobileMenu isLogged={isLogged} />}
                    {/*{!isLogged && !isMobile && window.location.pathname !== "/register" && window.location.pathname !== "/login" && window.location.pathname !== "/forget-password" ?*/}
                    {/*    <Button style={{"minWidth":"200px"}} variant="outlined" onClick={handleClickRegister}>Регистрация</Button> : null*/}
                    {/*}*/}
                    {user && !isMobile ?
                        <Stack onClick={handleLogout} flexDirection="row" gap={10}>
                            <LogoutIcon />
                        </Stack> :
                        null
                    }
                </Stack>
            </Container>
        </HeaderWrapper>
    );
}