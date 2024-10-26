import {useCallback, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import UserContext from '../context/user-context';

export const useApiRequest = () => {
    const navigate = useNavigate();
    const { logout } = useContext(UserContext);

    return useCallback(async (requestFunction, ...params) => {
        try {
            return await requestFunction(...params);
        } catch (error) {
            if (error.response && error.response.status === 444) {
                logout()
                navigate("/login");
                window.location.reload()
            } else {
                console.log(error)
                throw error.response.data;
            }
        }
    }, [logout, navigate]);
};