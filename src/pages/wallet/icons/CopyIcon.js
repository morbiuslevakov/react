import React, { useState } from 'react'
import { IconButton, Tooltip } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneIcon from '@mui/icons-material/Done';

export const CopyIcon = ({ text }) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 1500)
    }

    const tooltipText = copied ? "Скопировано" : "Скопировать"
    const copyIcon = copied ? <DoneIcon fontSize='small' color='#717171' /> : <ContentCopyIcon fontSize='small' color='#717171' />

    return <Tooltip title={tooltipText}>
        <IconButton onClick={handleCopy}>
            {copyIcon}
        </IconButton>
    </Tooltip>
}
