import React from "react"
import "./navbar.css"

const NavBar = () => {

  return (
    <div className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#tset">test</a></li>
        <li><a href="#test">test</a></li>
        <li style={{float: "right"}}><a href="/account">Account</a></li>
      </ul>
    </div>
  )
}

export default NavBar