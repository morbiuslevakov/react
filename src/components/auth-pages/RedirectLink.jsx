import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'

export const RedirectLink = ({ text, linkText, link }) => {
  return (
    <Typography style={{"color":"#717171", "fontFamily":"Montserrat, sans-serif", "margin": "auto", "marginTop":"10px"}}>{text} <Link to={link}>{linkText}</Link></Typography>
  )
}
