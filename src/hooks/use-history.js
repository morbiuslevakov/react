import { useState, useCallback, useEffect, useContext } from 'react';
import UserContext from "../context/user-context";
import { useApiRequest } from './use-api-request';
import { getTransactions } from "../utils/api-utils";

export const useHistory = (type) => {
    const { user } = useContext(UserContext);
    const [transactions, setTransactions] = useState([]);
    const apiRequest = useApiRequest();

    const fetchData = useCallback(async () => {
        try {
            const resData = await apiRequest(getTransactions, type);
            setTransactions(resData)
        } catch (error) {
            console.log(error)
        }
    }, [apiRequest])

    useEffect(() => {
        if (user) {
            fetchData().then();
        }
    }, [user, fetchData]);

    return { transactions };
}
