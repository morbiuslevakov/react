import React from "react";
import {Stack, Typography, Box} from "@mui/material";
import { DefaultCard, CardContent } from "../../pages/Styled";
import { CopyIcon } from "../../pages/wallet/icons/CopyIcon";

export const Profile = ({ user }) => {

    return (
        <DefaultCard className={"glass svelte-10w51t0 wallet-card"}>
            <CardContent style={{"display":"flex", "alignItems":"center"}}>
                <Stack className={"actions-block balance"}>
                    <div className={"avatar"}></div>
                </Stack>
                <Stack style={{"width":"100%", "display":"flex", "alignItems":"center", "marginTop":"10px"}}>
                    <Typography style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif"}} fontSize={"1.5rem"}>Ваша реферальная ссылка: </Typography>
                    <Stack flexDirection={'row'} alignItems={'center'} gap={1}>
                        <Typography style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif"}} sx={{ wordBreak: 'break-all' }}>{`${user.id}`}</Typography>
                        <CopyIcon text={`https://swap.yusra.community/register?referrer=${user.id}`} />
                    </Stack>
                </Stack>

                <Stack style={{"width":"100%", "display":"flex", "alignItems":"center", "marginTop":"10px"}}>
                    <Typography style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif"}} fontSize={"1.5rem"}>логин: {user.email}</Typography>
                    <Box style={{display: "flex", flexDirection: "row", padding: "20px", alignItems: "center", gap: "25px"}}>
                        <Box style={{display: "flex", alignItems: "center"}}>
                            <Typography style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif", "display":"block", textAlign: "center"}} fontSize={"1.5rem"}>
                                Приглашено<br/>[ {user.reffs} ]
                            </Typography>
                        </Box>
                        <Box style={{display: "flex", alignItems: "center"}}>
                            <Typography style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif", "display":"block", textAlign: "center"}} fontSize={"1.5rem"}>
                                Выведено<br/>[ {user.withdrawn} ]
                            </Typography>
                        </Box>
                    </Box>
                </Stack>
            </CardContent>
        </DefaultCard>
    );
}