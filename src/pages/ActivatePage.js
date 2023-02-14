import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { showAlert } from "../slices/alertSlice"
import { useDispatch } from "react-redux"
import { useNavigate, Link } from "react-router-dom"

const ActivatePage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch();

  useEffect(() => {
    activate()
  }, [])

  const activate = async () => {
    const uid = searchParams.get('uid')
    const token = searchParams.get('token')
    const res = await fetch(`http://localhost:8000/api/account/activate/${uid}/${token}/`)
    if (res.ok) {
      dispatch(showAlert({
        message: "Account Successfully Activated",
        type: "success"
      }))
    } else {
      dispatch(showAlert({
        message: "Failed To Activate Account",
        type: "error"
      }))
    }
  }

  return (
    <Spinner></Spinner>
  )
}

export default ActivatePage;