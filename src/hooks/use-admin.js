import {useApiRequest} from "./use-api-request";
import {useCallback, useContext, useEffect, useState} from "react";
import {getUsers} from "../utils/api-utils";
import UserContext from "../context/user-context";

export const useAdmin = (page, size) => {
    const { user } = useContext(UserContext);
    const [data, setData] = useState({});
    const apiRequest = useApiRequest();

    const fetchData = useCallback(async () => {
        try {
            const resData = await apiRequest(getUsers(page, size));
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

    return {data};
}