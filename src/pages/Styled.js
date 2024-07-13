import { Box, Stack, Button, TableRow, TableCell, styled } from "@mui/material";
import { tableCellClasses } from '@mui/material/TableCell';

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
    border: "3px solid #004444",
    backgroundColor: "#ffffff"
})

export const CardContent = styled(Stack)({
    padding: '20px'
})

export const CustomButtonStyled = styled(Button)({
    textTransform: "math-auto",
    marginTop: "20px",
    width: '100%',
    backgroundColor: "#004444",
    height: "48px",
    "&:hover": {
        backgroundColor: "#08694d"
    },
})

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#004444",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
        fontWeight: 500,
        border: "0.5px solid #717171"
    },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        // border: 0,
    },
}));