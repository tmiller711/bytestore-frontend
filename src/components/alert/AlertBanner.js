import React from "react"
import "./alert.css"

const AlertBanner = ({ message, type, onClose }) => {

  return (
    <div className={`alert alert-${type}`}>
      {message}
      <button className='close-alert' onClick={onClose}>
        &times;
      </button>
    </div>
  )
}

export default AlertBanner;