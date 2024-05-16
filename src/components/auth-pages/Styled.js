import { Box, Button, OutlinedInput, Stack, styled } from "@mui/material"

export const Wrapper = styled(Stack)({
  alignItems: "center",
})

export const ErrorBox = styled(Box)({
  color: "#AF0513FF",
  border: '1px solid #AF0513FF',
  padding: '10px 10px',
  borderRadius: "5px"
})

export const SubmitButton = styled(Button)({
  textTransform: "capitalize",
  width: '100%',
  backgroundColor: "#00a575",
  height: "48px",
  "&:hover": {
    backgroundColor: "#764ba2"
  },
})

export const CardContent = styled(Stack)({
  padding: '20px',
  alignItems: "center",
})

export const CustomInput = styled(OutlinedInput)({
  color: "#717171",
  width: '100%'
})

export const PageContent = styled(Stack)({
  maxWidth: '1100px',
  width: '100%',
  gap: '20px',
  justifyContent: 'space-between',
  alignItems: "center",
  flexDirection: 'row'
})

export const MainPageContent = styled(Stack)({
  width: '100%',
  gap: '20px',
  justifyContent: 'space-between',
  alignItems: "center"
})


export const FormWrapper = styled("form")({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  padding: '14px 0'
});
