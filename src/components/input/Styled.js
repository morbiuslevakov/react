import { OutlinedInput, styled } from '@mui/material';

export const CustomInput = styled(OutlinedInput)({
    color: "#000000",
    marginTop: "10px",
    backgroundColor: "#F2F3F7",
    width: '100%',
    "& .Mui-disabled": {
        backgroundColor: "#717171"
    },
    "&:focus": {
        borderColor: "#000000"
    }
})