import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { signup } from '../utils/api-utils';
import { authErrorMessages } from '../constants/auth';

export const useRegister = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const handleRegister = (e, referrer) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setIsError(true);
      setErrorMessage(authErrorMessages.email);
      return;
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&_.{}()#-]{8,}$/.test(password)) {
      setIsError(true);
      setErrorMessage(authErrorMessages.passwordValid);
      return;
    } else {
      setIsError(false);
    }

    const formData = JSON.stringify({ email: email, password: password, referrer: referrer })

    signup(formData).then(() => navigate("/login", { state: { email: email } })).catch(error => {
      setErrorMessage(error);
      setIsError(true);
    })
  };

  const togglePasswordVisible = () => {
    setShowPassword(prev => prev !== true);
  };

  const passwordType = showPassword ? 'password' : 'text'
  const handleChangeEmail = (e) => setEmail(e.target.value)
  const handleChangePassword = (e) => setPassword(e.target.value)

  const changeHandlers = {
    email: handleChangeEmail,
    password: handleChangePassword
  }

  const states = {
    email,
    password,
    isError,
    errorMessage,
    showPassword,
    passwordType
  }

  return { states, changeHandlers, handleRegister, togglePasswordVisible }
}
