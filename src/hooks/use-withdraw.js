import { useState } from 'react';
import { sendTokens } from '../utils/api-utils';
import { useWallet } from "./use-wallet";
import { PublicKey } from "@solana/web3.js";

export const useWithdraw = () => {
    const { data, user } = useWallet();
    const [address, setAddress] = useState("");
    const [amount, setAmount] = useState("");
    const [isValidAddress, setIsValidAddress] = useState(true);
    const [isValidAmount, setIsValidAmount] = useState(true);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [amountErrorMessage, setAmountErrorMessage] = useState("");

    const handleWithdraw = (e) => {
        e.preventDefault();

        try {
            new PublicKey(address);
            setIsValidAddress(true);
        } catch (error) {
            setIsValidAddress(false);
            return;
        }

        if (amount === "" || amount === null || address === "" || address === null) {
            setIsValidAddress(false);
            setIsValidAmount(false);
            setAmountErrorMessage("Введите валидное колличество");
            return;
        }

        const formData = JSON.stringify({ address: address, amount: amount })

        sendTokens(formData).then().catch(error => {
            setErrorMessage(error);
            setIsError(true);
        })
    };

    const handleChangeAddress = (e) => {
        setAddress(e.target.value);
        try {
            new PublicKey(e.target.value);
            setIsValidAddress(true);
        } catch (error) {
            setIsValidAddress(false);
        }
    }

    const handleChangeAmount = (e) => {
        if (e.target.value < 0) {
            setIsValidAmount(false);
            setAmountErrorMessage("Введите валидное колличество");
        } else if (e.target.value >= data.free - 5) {
            setIsValidAmount(false);
            setAmountErrorMessage("Недостаточно средств");
        } else if (/^(?!0+(\.0*)?$)\d+(\.\d{1,8})?$/.test(e.target.value)) {
            setIsValidAmount(true);
            setAmountErrorMessage("");
        } else {
            setIsValidAmount(false);
            if (/^0+(\.0*)?$/.test(e.target.value)) {
                setAmountErrorMessage("Введите число отличное от нуля")
            } else if (/^\d+\.\d{9,}$/.test(e.target.value)) {
                setAmountErrorMessage("Максимальное количество цифр после десятичной точки: 8");
            } else {
                setAmountErrorMessage("Введите валидное колличество");
            }
        }
        setAmount(e.target.value.replace(/,/g, "."));
    }

    const changeHandlers = {
        address: handleChangeAddress,
        amount: handleChangeAmount
    }

    const states = {
        address,
        amount,
        isValidAddress,
        isValidAmount,
        isError,
        errorMessage,
        amountErrorMessage
    }

    return { data, user, states, changeHandlers, handleWithdraw }
}
