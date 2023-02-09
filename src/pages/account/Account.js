import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../userSlice"

const Account = () => {
  const authenticated = useSelector((state) => state.auth.authenticated)
  const token = useSelector((state) => state.auth.token)
  const user = useSelector((state) => state.auth.currentUser)
  const dispatch = useDispatch()

  const logoutFunc = () => {
    dispatch(logout())
    const res = fetch('http://127.0.0.1:8000/api/account/logout/', {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    console.log(res.status)
  }

  if (authenticated) {

    return (
      <>
        <h1>{user.email}</h1>
        <Link to="/" onClick={() => logoutFunc()}>
          Logout
        </Link>
      </>
    )

  } else {

    return (
      <h1>Please login</h1>
    )

  }

}

export default Account;