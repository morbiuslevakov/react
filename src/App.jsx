import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { Wallet } from "./pages/wallet/Wallet";
import { Deposit } from "./pages/deposit/Deposit";
import { Withdraw } from "./pages/withdraw/Withdraw";
import { History } from "./pages/history/History";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { ConfirmAccount } from "./pages/confirm-account/ConfirmAccount";
import { Main } from "./pages/main/Main";
import { SharedLayout } from "./pages/shared-layout/SharedLayout";
import { PrivateRoute } from "./pages/private/PrivateRoute";
import { theme } from "./constants/theme";
import { UserProvider } from "./context/user-context";

export const App = () => {
  return (
      <UserProvider>
          <ThemeProvider theme={theme}>
              <Router>
                  <Routes>
                      <Route path="/" element={<SharedLayout/>}>
                          <Route path="register" element={<Register/>}></Route>
                          <Route path="login" element={<Login/>}></Route>
                          <Route path="confirm-account" element={<ConfirmAccount />}></Route>
                          <Route path="history" element={<PrivateRoute><History /></PrivateRoute>} ></Route>
                          <Route path="deposit" element={<PrivateRoute><Deposit /></PrivateRoute>} ></Route>
                          <Route path="withdraw" element={<PrivateRoute><Withdraw /></PrivateRoute>} ></Route>
                          <Route path="wallet" element={<PrivateRoute><Wallet /></PrivateRoute>} ></Route>
                          <Route path="/" element={<Main />} ></Route>
                          <Route path="*" element={<Main />} ></Route>
                      </Route>
                  </Routes>
              </Router>
          </ThemeProvider>
      </UserProvider>
  );
}