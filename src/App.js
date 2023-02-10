import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import HomePage from "./pages/homepage/HomePage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import PasswordReset from "./pages/auth/PasswordReset";
import NavBar from "./components/navbar/NavBar";
import "./index.css"
import Account from "./pages/account/Account";
import ActivatePage from "./pages/ActivatePage";
import PrivateRoute from "./utils/PrivateRoute";
import {logout, updateTokens} from './userSlice';

function App() {
  const [loading, setLoading] = useState(true)
  const refreshToken = useSelector((state) => state.auth.refreshToken)
  const dispatch = useDispatch();

  useEffect(() => {
    if (loading) {
      updateTokensFunc()
    }
    const timeDelay = 1000 * 60 * 59
    const interval = setInterval(() => {
      if (refreshToken) {
        updateTokensFunc()
      }
    }, 5000)
    return () => clearInterval(interval)

  }, [loading, refreshToken, dispatch])

  // put this method in a separate file. maybe called utils.js?
  const updateTokensFunc = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/account/token/refresh/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'refresh': refreshToken
      })
    })
    let data = await res.json()

    if (res.status == 200) {
      dispatch(updateTokens({
        accessToken: data.access,
        refreshToken: data.refresh,
      }))
    } else {
      dispatch(logout())
    }

    if (loading) {
      setLoading(false)
    }
  }

  // only render everything once the access token has been updated
  if (loading === false) {
    return (
      <>
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
      </>
    );
  }
}

export default App;
