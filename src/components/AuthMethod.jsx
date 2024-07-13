import { useNavigate } from 'react-router-dom';
import {Box, Button, Typography} from "@mui/material";

export const AuthMethod = ({ title, text, icon, link }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(link);
    }

    return (
        <Box style={{display: "flex", alignItems: "center", width: "100%", marginTop:"20px"}}>
            <Box display="flex" alignItems="center">
                {icon}
            </Box>
            <Box style={{display: "flex", marginLeft: "20px"}} alignItems="center">
                <Typography>
                    <span style={{fontSize: "1.1rem", color: "#717171", fontWeight: 600}}>{title}</span><br/>
                    <span style={{fontSize: "1rem", color: "#004444"}}>{text}</span>
                </Typography>
            </Box>
            <Button onClick={handleClick} style={{marginLeft: "auto"}} variant="contained" color="primary">
                Управлять
            </Button>
        </Box>
    );
}