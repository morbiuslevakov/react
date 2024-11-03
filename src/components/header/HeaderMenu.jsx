import React, {useContext} from 'react'
import { Stack, Typography } from '@mui/material'
import { HeaderMenuItem } from './Styled'
import UserContext from "../../context/user-context";

export const HeaderMenu = ({ isLogged }) => {
    const { user } = useContext(UserContext);

    return (
        <Stack alignItems={'center'} flexDirection={'row'} gap={2}>
            <HeaderMenuItem to={'/'}>
                <Typography>
                    Главная
                </Typography>
            </HeaderMenuItem>
            {isLogged &&
                <>
                    <HeaderMenuItem to={'/wallet'}>
                        <Typography>
                            Кошелек
                        </Typography>
                    </HeaderMenuItem>
                    <HeaderMenuItem to={'/profile'}>
                        <Typography>
                            Профиль
                        </Typography>
                    </HeaderMenuItem>
                </>
            }
            {(isLogged && user && user.roles && (user.roles.includes('ROLE_ADMIN') || user.roles.includes('ROLE_SUPERUSER'))) &&
                <HeaderMenuItem to={'/admin'}>
                    <Typography>
                        Админ-панель
                    </Typography>
                </HeaderMenuItem>
            }
        </Stack>
    )
}