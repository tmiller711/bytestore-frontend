import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import "./navbar.css"

const NavBar = () => {
  const authenticated = useSelector((state) => state.auth.authenticated)

  return (
    <div className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        {authenticated ? 
          <li style={{float: "right"}}><Link to="/account">Account</Link></li> : 
          <li style={{float: "right"}}><Link to="/login">Login</Link></li> 
        }
      </ul>
    </div>
  )
}

export default NavBar