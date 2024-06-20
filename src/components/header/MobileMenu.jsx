import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Stack,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import UserContext from '../../context/user-context';
import {useMediaQueryHook} from "../../hooks/use-media-query";

export const MobileMenu = ({ isLogged }) => {
    const isMobile = useMediaQueryHook('sm')
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
                    <Divider sx={{ backgroundColor: '#004444', mx: 2 }} />
                    <List>
                        <Stack gap={1} pt={1}>
                            <ListItem disablePadding>
                                <ListItemButton sx={{ paddingY: 0 }} onClick={() => { navigate("/") }}>
                                    <ListItemText className="menu-links" primary={"Главная"} />
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
                                <ListItemButton sx={{ paddingY: 0 }} onClick={() => { navigate("/explorer") }}>
                                    <ListItemText className="menu-links" primary={"Обзор"} />
                                </ListItemButton>
                            </ListItem>
                            {!isLogged && !isMobile && window.location.pathname !== "/register" && window.location.pathname !== "/login" && window.location.pathname !== "/forget-password" ?
                                <ListItem disablePadding>
                                    <ListItemButton sx={{ paddingY: 0 }} onClick={() => { navigate("/register") }}>
                                        <ListItemText className="menu-links" primary={"Регистрация"} />
                                    </ListItemButton>
                                </ListItem> : null
                                // <Button style={{"minWidth":"200px"}} variant="outlined" onClick={handleClickRegister}>Регистрация</Button> : null
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
