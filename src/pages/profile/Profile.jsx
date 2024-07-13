import React from "react";
import { Stack } from "@mui/material";
import { Navigate } from "react-router-dom";
import { PageContent, Wrapper } from "../../components/auth-pages/Styled";
import { useWallet } from "../../hooks/use-wallet";
import { SnackbarProvider } from "notistack";
import { Security } from "../../components/security/Security";
import { Profile as ProfileComponent } from "../../components/profile/Profile";

export const Profile = () => {
    const { user } = useWallet();

    if (!user) {
        return <Navigate to={'/login'} />;
    }

    return (
        <Wrapper style={{"backgroundImage":"url(https://s3.timeweb.com/24581035-081cc679-ce58-4307-808e-bb42d83baee6/yusra.svg)", "backgroundRepeat":"no-repeat", "backgroundAttachment":"fixed", "width":"100%", "height":"100vh", "top":0, "right":0}}>
            <SnackbarProvider maxSnack={2}>
                <PageContent>
                    <Stack mt={10} gap={7}>
                        <Security user={user} />
                        {/*<ProfileComponent user={user} />*/}
                    </Stack>
                </PageContent>
            </SnackbarProvider>
        </Wrapper>
    );
}