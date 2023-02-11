import React, { useState } from "react"
import "./alert.css"

const Alert = ({ text }) => {
  const [showAlert, setShowAlert] = useState(true);

  return (
    showAlert && (
      <div className='alert'>
        {text}
        <button className='close-alert' onClick={() => setShowAlert(false)}>X</button>
      </div>
    )
  )
}

export default Alert;