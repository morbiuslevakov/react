import React from 'react';
import { ReactComponent as QuestionAppIcon } from '../../../static/question.svg';
import {Box, styled} from "@mui/material";

export const QuestionIcon = () => {
    return (
        <LogoWrapper>
            <QuestionAppIcon />
        </LogoWrapper>
    )
}

const LogoWrapper = styled(Box)({
    display: "flex",
    "margin-left": "5px",
    cursor: "pointer"
})
