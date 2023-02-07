import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const ActivatePage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [status, setStatus] = useState('')

  useEffect(() => {

    activate()
  }, [])

  const activate = async () => {
    const uid = searchParams.get('uid')
    const token = searchParams.get('token')
    const res = await fetch(`http://localhost:8000/api/account/activate/${uid}/${token}/`)
    if (res.ok) {
      setStatus('success')
    } else {
      setStatus('failed')
    }
  }

  if (status === '') {
    // make loading symbol
    <Spinner></Spinner>
  } else if (status === 'success') {
    return (
      <h1>Account activated</h1> 
    )
  } else {
    return (
      <h1>Error activating account</h1>
    )
  }
}

export default ActivatePage;