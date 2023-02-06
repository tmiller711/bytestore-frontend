import React from "react"
import "./navbar.css"

const NavBar = () => {

  return (
    <div className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
        <li style={{float: "right"}}><a href="/account">Account</a></li>
      </ul>
    </div>
  )
}

export default NavBar