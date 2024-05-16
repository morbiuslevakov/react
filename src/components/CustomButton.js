import React from 'react'
import { Typography } from '@mui/material'
import { CustomButtonStyled } from '../pages/Styled'

export const CustomButton = ({ text }) => {
    return (
        <CustomButtonStyled type="submit">
            <Typography>{text}</Typography>
        </CustomButtonStyled>
    )
}
