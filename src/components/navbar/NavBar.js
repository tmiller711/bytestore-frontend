import React from "react"
import { Link } from "react-router-dom"
import "./navbar.css"

const NavBar = () => {

  return (
    <div className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li style={{float: "right"}}><Link to="/account">Account</Link></li>
      </ul>
    </div>
  )
}

export default NavBar