import {useMediaQuery, useTheme} from '@mui/material';

export const useMediaQueryHook = (query) => {
    const theme = useTheme()
    return useMediaQuery(theme.breakpoints.down(query))
}
