import React from 'react';
import { ReactComponent as LogoutAppIcon } from '../../static/logout.svg';
import { LogoWrapper } from './Styled';

export const LogoutIcon = () => {
    return (
        <LogoWrapper>
            <LogoutAppIcon />
        </LogoWrapper>
    )
}
