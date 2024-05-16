import React from "react";
import { Stack, Typography, Tooltip } from "@mui/material";
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { Navigate, Link } from "react-router-dom";
import { PageContent, Wrapper } from "../../components/auth-pages/Styled";
import { useWallet } from "../../hooks/use-wallet";
import { DefaultCard, CardContent } from "../Styled";
import { YusraGreyIcon } from "./icons/YusraGreyIcon";
import { ArrowIcon } from "./icons/ArrowIcon";
import { AddIcon } from "./icons/AddIcon";
import { Profile } from '../../components/profile/Profile';
import { SnackbarProvider } from "notistack";

export const Wallet = () => {
    const { data, user, changeHandlers, states } = useWallet();
    const [open, setOpen] = React.useState(false);

    if (!user) {
        return <Navigate to={'/login'} />;
    }

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    return (
        <Wrapper style={{"backgroundImage":"url(https://s3.timeweb.com/24581035-081cc679-ce58-4307-808e-bb42d83baee6/yusra.svg)", "backgroundRepeat":"no-repeat", "backgroundAttachment":"fixed", "width":"100%", "height":"100%", "top":0, "right":0}}>
            <SnackbarProvider maxSnack={2}>
                <PageContent>
                    <Stack mt={10} gap={7}>
                        <DefaultCard className={"glass svelte-10w51t0 wallet-card"}>
                            <CardContent style={{"display":"block"}}>
                                <Stack className={"actions-block balance"}>
                                    <Typography className="title" style={{"color":"#00a575", "fontFamily":"Montserrat, sans-serif", "display":"flex", "alignItems":"baseline"}} fontSize={"3rem"}>{data.total}</Typography>
                                    <Typography className="subtitle" style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif"}} fontSize={"1.5rem"}>Баланс YUSRA</Typography>
                                </Stack>
                                <Stack className={"actions-block transactions"}>
                                    <Link to={"/withdraw"}>
                                        <ArrowIcon />
                                    </Link>
                                    <Link to={"/deposit"}>
                                        <AddIcon />
                                    </Link>
                                </Stack>
                                <hr className={"line"}/>
                                <Typography className="subtitle" style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif", "display":"flex", "alignItems":"center"}} fontSize={"1.5rem"}>
                                    Доступно
                                    <ClickAwayListener onClickAway={handleTooltipClose}>
                                        <div>
                                            <Tooltip
                                                style={{"marginLeft":"10px", "display":"block"}}
                                                PopperProps={{
                                                    disablePortal: true,
                                                }}
                                                onClose={handleTooltipClose}
                                                open={open}
                                                disableFocusListener
                                                disableHoverListener
                                                disableTouchListener
                                                title={<Typography width={'180px'} fontSize={12}>Колличество токенов доступное к выводу</Typography>}
                                            >
                                                <HelpOutlineRoundedIcon onClick={handleTooltipOpen} fontSize="medium" color="#717171" />
                                            </Tooltip>
                                        </div>
                                    </ClickAwayListener>
                                    <Typography className="subtitle" style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif", "marginLeft": "auto", "display":"flex"}} fontSize={"1.5rem"}>{data.free}<YusraGreyIcon/></Typography>
                                </Typography>
                            </CardContent>
                        </DefaultCard>
                        <Profile user={user} states={states} changeHandlers={changeHandlers} />
                    </Stack>
                </PageContent>
            </SnackbarProvider>
        </Wrapper>
    );
}