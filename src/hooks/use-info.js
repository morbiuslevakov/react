import { useState, useCallback, useEffect, useContext } from 'react';
import UserContext from "../context/user-context";
import { useApiRequest } from './use-api-request';
import { getWalletData } from "../utils/api-utils";

export const useInfo = () => {
    const { user } = useContext(UserContext);
    const [data, setData] = useState({});
    const apiRequest = useApiRequest();

    const fetchData = useCallback(async () => {
        try {
            const resData = await apiRequest(getWalletData);
            setData(resData)
        } catch (error) {
            console.log(error)
        }
    }, [apiRequest])

    useEffect(() => {
        if (user) {
            fetchData().then();
        }
    }, [user, fetchData]);


    return { user, data };
}
