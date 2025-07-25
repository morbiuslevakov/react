import axios from "axios";

const apiUrl = "https://api.ysr.community/v1";
// const apiUrl = "http://localhost:8081/v1";

export const apiConfig = {
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
};

export const signup = async (payload) => {
    const url = `${apiUrl}/auth/signup`;
    try {
        const response = await axios.post(url, payload, apiConfig)
        return response.data;
    } catch (error) {
        throw error.response.data
    }
};

export const login = async (payload) => {
    const url = `${apiUrl}/auth/signin`
    try {
        const response = await axios.post(url, payload, apiConfig)
        return response.data;
    } catch (error) {
        throw error
    }
};

export const signout = async () => {
    const url = `${apiUrl}/auth/signout`;
    try {
        const response = await axios.get(url, apiConfig)
        return response.data;
    } catch (error) {
        throw error.response.data
    }
};

export const resendConfirmApi = async (email) => {
    const url = `${apiUrl}/auth/send-confirmation?principal=${email}`;
    try {
        const response = await axios.get(url, apiConfig)
        return response.data;
    } catch (error) {
        throw error.response.data
    }
};

export const confirmAccount = async (token) => {
    const url = `${apiUrl}/auth/confirm-account/${token}`;
    try {
        const response = await axios.get(url, apiConfig)
        return response.data;
    } catch (error) {
        throw error.response.data
    }
};

export const forgetPassword = async (email) => {
    const url = `${apiUrl}/auth/forget-password?email=${email}`;
    try {
        const response = await axios.get(url, apiConfig)
        return response.data;
    } catch (error) {
        throw error.response.data
    }
};

export const forgetPasswordPost = async (payload, uuid) => {
    const url = `${apiUrl}/auth/forget-password/${uuid}`;
    try {
        const response = await axios.post(url, payload, apiConfig)
        return response.data;
    } catch (error) {
        throw error.response.data
    }
};


export const getWalletData = async () => {
    const url = `${apiUrl}/wallet/data`;
    try {
        const response = await axios.get(url, apiConfig)
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getTransactions = async (type) => {
    const url = `${apiUrl}/wallet/transactions?type=${type}`;
    try {
        const response = await axios.get(url, apiConfig)
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const sendTokens = async (payload) => {
    const url = `${apiUrl}/wallet/send`;
    try {
        const response = await axios.post(url, payload, apiConfig)
        return response.data;
    } catch (error) {
        throw error.response.data
    }
};

export const changePassword = async (payload) => {
    const url = `${apiUrl}/user/change-password`;
    try {
        const response = await axios.post(url, payload, apiConfig)
        return response.data;
    } catch (error) {
        throw error.response.data
    }
};

export const requestGoogleAuth = async () => {
    const url = `${apiUrl}/user/enable-tfauth`;
    try {
        const response = await axios.get(url, apiConfig)
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const enableGoogleAuth = async (payload) => {
    const url = `${apiUrl}/user/enable-tfauth`;
    try {
        const response = await axios.post(url, payload, apiConfig)
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const disableGoogleAuth = async (payload) => {
    const url = `${apiUrl}/user/disable-tfauth`;
    try {
        const response = await axios.post(url, payload, apiConfig)
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getInfo = async () => {
    const url = `${apiUrl}/public/info`;
    try {
        const response = await axios.get(url, apiConfig)
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getUsers = async (page, size) => {
    const url = `${apiUrl}/admin/getUsers?page=${page}&size=${size}`;
    try {
        const response = await axios.get(url, apiConfig)
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getUserTransactions = async (email, type) => {
    const url = `${apiUrl}/admin/getUser/${email}?type=${type}`;
    try {
        const response = await axios.get(url, apiConfig)
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getLastTransactions = async () => {
    const url = `${apiUrl}/admin/getLastTransactions`;
    try {
        const response = await axios.get(url, apiConfig)
        return response.data;
    } catch (error) {
        throw error;
    }
};
