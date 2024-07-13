import {styled} from "@mui/material/styles";
import {Button} from "@mui/material";

export const StyledButton = styled(Button)(({theme}) => ({
    textTransform: "math-auto",
    marginTop: "20px",
    width: '100%',
    backgroundColor: "#004444",
    height: "48px",
    "&:hover": {
        backgroundColor: "#08694d"
    },
}))