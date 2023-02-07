import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from "./pages/homepage/HomePage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import PasswordReset from "./pages/auth/PasswordReset";
import NavBar from "./components/navbar/NavBar";
import "./index.css"
import Account from "./pages/account/Account";
import ActivatePage from "./pages/ActivatePage";

function App() {
  return (
    <>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
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

export default App;
