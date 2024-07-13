import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { authErrorMessages } from '../constants/auth';
import { login } from '../utils/api-utils';
import { setUserToStorage } from '../utils/user-utils';

export const useLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const emailFromLocation = location.state?.email;

    const [confirmEmail, setConfirmEmail] = useState(false)
    const [email, setEmail] = useState(emailFromLocation || "");
    const [password, setPassword] = useState("");
    const [fa, setFa] = useState("");
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(true);
    const [faRequired, setFaRequired] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setIsError(true);
            setErrorMessage(authErrorMessages.email);
            return;
        } else if (!password) {
            setIsError(true);
            setErrorMessage(authErrorMessages.password);
            return;
        } else if (faRequired && !fa) {
            setIsError(true);
            setErrorMessage(authErrorMessages.fa);
            return;
        } else {
            setIsError(false);
        }

        const formData = JSON.stringify({ email: email, password: password, totpCode: fa })

        login(formData).then(result => {
            setUserToStorage(result)
            window.location.reload()
        }).catch((error) => {
            console.log(error)
            if (error.response.data === "User not found") {
                setErrorMessage("Пользователь не найден");
            }
            if (error.response.data === "Invalid password") {
                setErrorMessage("Неверный пароль");
            }
            if (error.response.data === "Two factor authentication required") {
                setFaRequired(true)
                setErrorMessage("Введите 2FA код");
            }
            if (error.response.data === "Invalid two factor authentication code") {
                setErrorMessage("Неверный 2FA код");
            }
            if (error.response.data === "Account not enabled") {
                navigate(`/confirm-account?email=${email}`)
                window.location.reload()
            }
            setIsError(true);
        })
    };

    const togglePasswordVisible = () => {
        setShowPassword(prev => prev !== true);
    };

    const passwordType = showPassword ? 'password' : 'text'

    const handleChangeEmail = (e) => setEmail(e.target.value)
    const handleChangePassword = (e) => setPassword(e.target.value)
    const handleChangeFa = (e) => setFa(e.target.value)


    const changeHandlers = {
        email: handleChangeEmail,
        password: handleChangePassword,
        fa: handleChangeFa
    }

    const states = {
        fa,
        faRequired,
        confirmEmail,
        email,
        password,
        isError,
        errorMessage,
        showPassword,
        passwordType
    }

    return { states, changeHandlers, handleLogin, togglePasswordVisible, setConfirmEmail }
}
