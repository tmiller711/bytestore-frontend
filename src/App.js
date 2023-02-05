import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from "./pages/homepage/HomePage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import PasswordReset from "./pages/auth/PasswordReset";

function App() {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/passwordreset" element={<PasswordReset />} />
      </Routes>
    </div>
  );
}

export default App;
