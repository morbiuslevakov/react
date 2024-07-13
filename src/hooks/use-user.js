import { useState, useCallback, useEffect, useContext } from 'react';
import UserContext from "../context/user-context";
import { useApiRequest } from './use-api-request';
import { requestGoogleAuth } from "../utils/api-utils";

export const useUser = () => {
    const { user } = useContext(UserContext);
    const [data, setData] = useState({});
    const apiRequest = useApiRequest();

    const fetchAuth = useCallback(async () => {
        try {
            const resData = await apiRequest(requestGoogleAuth);
            setData(resData)
        } catch (error) {
            console.log(error)
        }
    }, [apiRequest])

    useEffect(() => {
        if (user) {
            fetchAuth().then();
        }
    }, [user, fetchAuth()]);


    return { data };
}
