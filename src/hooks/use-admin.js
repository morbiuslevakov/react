import {useApiRequest} from "./use-api-request";
import {useCallback, useEffect, useState} from "react";
import {getUsers} from "../utils/api-utils";

export const useAdmin = () => {
    const [page, setPage] = useState(1);
    const size = 10;
    const [data, setData] = useState(null);
    const apiRequest = useApiRequest();

    const fetchData = useCallback(async () => {
        try {
            const resData = await getUsers(page, size);
            setData(resData)
        } catch (error) {
            console.log(error)
        }
    }, [apiRequest, page, size])

    useEffect(() => {
        fetchData().then();
    }, [fetchData]);

    return {data, page, setPage};
}