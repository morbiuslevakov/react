import { Box, Stack, Button, styled } from "@mui/material";

export const DefaultCard = styled(Box)({
    margin: "auto",
    display: "block!important",
    width: "100%",
    borderRadius: "16px"
})

export const TelegramCard = styled(Box)({
    margin: "auto",
    display: "block!important",
    borderRadius: "64px",
    padding: "36px 0",
    border: "3px solid #00a575",
    backgroundColor: "#ffffff"
})

export const CardContent = styled(Stack)({
    padding: '20px'
})

export const CustomButtonStyled = styled(Button)({
    textTransform: "capitalize",
    marginTop: "20px",
    width: '100%',
    backgroundColor: "#00a575",
    height: "48px",
    "&:hover": {
        backgroundColor: "#08694d"
    },
})