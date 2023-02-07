import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../userSlice"

const Account = () => {
  const authenticated = useSelector((state) => state.auth.authenticated)
  const user = useSelector((state) => state.auth.currentUser)
  const dispatch = useDispatch()

  if (authenticated) {

    return (
      <>
        <h1>{user.email}</h1>
        <Link to="/logout" onClick={() => dispatch(logout())}>
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