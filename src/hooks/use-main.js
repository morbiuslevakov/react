import {useState, useCallback, useEffect} from 'react';
import { useApiRequest } from './use-api-request';
import { getInfo } from "../utils/api-utils";

export const useMain = () => {
    const [data, setData] = useState({});
    const apiRequest = useApiRequest();

    const fetchData = useCallback(async () => {
        try {
            const resData = await apiRequest(getInfo);
            setData(resData)
        } catch (error) {
            console.log(error)
        }
    }, [apiRequest])

    useEffect(() => {
        fetchData().then();
    }, [fetchData]);


    return { data };
}
