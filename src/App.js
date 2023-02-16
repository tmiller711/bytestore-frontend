import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import HomePage from "./pages/homepage/HomePage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import PasswordReset from "./pages/auth/PasswordReset";
import NavBar from "./components/navbar/NavBar";
import Account from "./pages/account/Account";
import ActivatePage from "./pages/ActivatePage";
import AlertBanner from "./components/alert/AlertBanner";
import { hideAlert } from './slices/alertSlice'
import UpdateTokens from "./utils/UpdateTokens";

import "./index.css"
import Footer from "./components/footer/Footer";

function App() {
  const [loading, setLoading] = useState(true)
  const refreshToken = useSelector((state) => state.auth.refreshToken)
  const alert = useSelector(state => state.alert)
  const dispatch = useDispatch();

  useEffect(() => {
    if (loading) {
      UpdateTokens()
      setLoading(false)
    }
    const timeDelay = 1000 * 60 * 59
    const interval = setInterval(() => {
      if (refreshToken) {
        UpdateTokens(loading)
      }
    }, timeDelay)
    return () => clearInterval(interval)

  }, [loading, refreshToken, dispatch])

  // only render everything once the access token has been updated
  if (loading === false) {
    return (
      <>
        {alert.show && (
          <AlertBanner
            message={alert.message}
            type={alert.type}
            onClose={() => dispatch(hideAlert())}
          />
        )}

        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/passwordreset" element={<PasswordReset />} />
            <Route path="/account" element={<Account />} />
            <Route path="/activate" element={<ActivatePage />} />
          </Routes>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
