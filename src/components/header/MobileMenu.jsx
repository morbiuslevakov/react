import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import UserContext from '../../context/user-context';

export const MobileMenu = ({ isLogged }) => {
    const { logout } = useContext(UserContext);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()

    const toggleDrawer = (value) => () => {
        setOpen(value);
    };

    const handleLogout = () => {
        logout()
        navigate("/login");
        window.location.reload()
    }

    const menuList = (
        <Box sx={{ width: 250 }} py={2} height={'100%'} role="presentation" onClick={toggleDrawer(false)} bgcolor={'#F2F3F7'}>
            <Stack justifyContent={'space-between'} height={'100%'}>
                <Box>
                    <Typography px={2} pb={1} fontWeight={500}>Меню</Typography>
                    <Divider sx={{ backgroundColor: '#00a575', mx: 2 }} />
                    <List>
                        <Stack gap={1} pt={1}>
                            <ListItem disablePadding>
                                <ListItemButton sx={{ paddingY: 0 }} onClick={() => { navigate("/") }}>
                                    {/*<ListItemIcon>*/}
                                    {/*    {item.icon}*/}
                                    {/*</ListItemIcon>*/}
                                    <ListItemText className="menu-links" primary={"Главная"} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton sx={{ paddingY: 0 }} onClick={() => { navigate("/explorer") }}>
                                    <ListItemText className="menu-links" primary={"Обзор"} />
                                </ListItemButton>
                            </ListItem>
                            {isLogged &&
                                <ListItem disablePadding>
                                    <ListItemButton sx={{ paddingY: 0 }} onClick={() => { navigate("/wallet") }}>
                                        <ListItemText className="menu-links" primary={"Кошелек"} />
                                    </ListItemButton>
                                </ListItem>
                            }
                            <ListItem disablePadding>
                                <ListItemButton sx={{ paddingY: 0 }} onClick={() => { navigate("/faq") }}>
                                    <ListItemText className="menu-links" primary={"FAQ"} />
                                </ListItemButton>
                            </ListItem>
                        </Stack>
                    </List>
                </Box>
                {isLogged ?
                    <ListItem disablePadding>
                        <ListItemButton sx={{ paddingY: 0 }} onClick={handleLogout}>
                            {/*<ListItemIcon>*/}
                            {/*    <ExitIcon />*/}
                            {/*</ListItemIcon>*/}
                            <ListItemText primary={'Выход'} />
                        </ListItemButton>
                    </ListItem> :
                    <ListItem disablePadding>
                        <ListItemButton sx={{ paddingY: 0 }} onClick={() => { navigate("/register") }}>
                            <ListItemText className="menu-links" primary={"Регистрация"} />
                        </ListItemButton>
                    </ListItem>
                }
            </Stack>
        </Box>
    )

    return (
        <>
            <Stack justifyContent={'center'}>
                <IconButton onClick={toggleDrawer(true)} color="primary">
                    <MenuIcon fontSize="large" />
                </IconButton>
            </Stack>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)} >
                {menuList}
            </Drawer>
        </>
    )
}
