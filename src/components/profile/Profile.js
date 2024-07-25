import React from "react";
import {Stack, Typography, Box} from "@mui/material";
import { DefaultCard, CardContent } from "../../pages/Styled";
import { CopyIcon } from "../../pages/wallet/icons/CopyIcon";

export const Profile = ({ user }) => {

    return (
        <DefaultCard className={"glass svelte-10w51t0 wallet-card"}>
            <CardContent style={{"display":"block", "alignItems":"center"}}>
                {/*<Stack className={"actions-block balance"}>*/}
                {/*    <div className={"avatar"}></div>*/}
                {/*</Stack>*/}
                <Box style={{
                    padding: "20px",
                    alignItems: "center",
                    gap: "25px"
                }}>
                    <div className={"avatar"}></div>
                    <Box style={{margin: "auto", display: "flex"}}>
                        <Box style={{display: "inline-flex", margin: "auto", marginRight: "15px", alignItems: "center"}}>
                            <Typography style={{
                                "color": "#717171",
                                "fontFamily": "Montserrat, sans-serif",
                                "display": "block",
                                textAlign: "center"
                            }} fontSize={"1.5rem"}>
                                Приглашено<br/><span style={{"fontFamily": "Offbit"}}>{user.reffs}</span>
                            </Typography>
                        </Box>
                        <Box style={{display: "inline-flex", margin: "auto", alignItems: "center"}}>
                            <Typography style={{
                                "color": "#717171",
                                "fontFamily": "Montserrat, sans-serif",
                                "display": "block",
                                textAlign: "center"
                            }} fontSize={"1.5rem"}>
                                Выведено<br/><span style={{"fontFamily": "Offbit"}}>{user.withdrawn}</span>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Stack style={{"width": "100%", "marginTop": "10px", display: "flex", alignItems: "center"}}>
                    <Stack flexDirection={'row'} alignItems={'center'} gap={1}>
                        <Typography style={{"color": "#717171", "fontFamily": "Montserrat, sans-serif"}}
                                    fontSize={"1.5rem"}>Реф.ссылка: </Typography>
                        <Typography fontSize={"1rem"} style={{"color": "#717171", "fontFamily": "Montserrat, sans-serif"}}
                                    sx={{wordBreak: 'break-all'}}>{`${user.id}`}</Typography>
                        <CopyIcon text={`https://swap.yusra.community/register?referrer=${user.id}`}/>
                    </Stack>
                </Stack>

                <Stack style={{"width":"100%", "marginTop":"10px", display: "flex", alignItems: "center"}}>
                    <Stack flexDirection={'row'} alignItems={'center'} gap={1}>
                        <Typography style={{"color": "#717171", "fontFamily": "Montserrat, sans-serif"}}
                                    fontSize={"1.5rem"}>Логин: </Typography>
                        <Typography fontSize={"1rem"} style={{"color": "#717171", "fontFamily": "Montserrat, sans-serif"}}
                                    sx={{wordBreak: 'break-all'}}>{`${user.email}`}</Typography>
                        <CopyIcon text={user.email}/>
                    </Stack>
                </Stack>
            </CardContent>
        </DefaultCard>
    );
}