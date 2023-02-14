import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { showAlert } from "../../slices/alertSlice"
import { useDispatch } from "react-redux"
import "./register.css"

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault()
    
    const res = await fetch("http://127.0.0.1:8000/api/account/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "XCSRF-Token": 
      },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password
      })
    })
    
    if (res.ok) {
      dispatch(showAlert({
        message: `Activation Email Sent To '${email}'`,
        type: 'success'
      }))
      navigate("/", {replace: true})
    } else {
      const errors = await res.json()
      dispatch(showAlert({
        message: Object.entries(errors)[0][1],
        type: 'error'
      }))
    }
  }

  return (
    <div className="register-page">
      <form onSubmit={onSubmit} method="#" class="form login">
        <div class="form__field">
          <label for="register__email"><svg class="icon"></svg><span class="hidden">Email</span></label>
          <input id="register__email" type="text" name="username" class="form__input" placeholder="Email" required onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div class="form__field">
          <label for="register__username"><svg class="icon"></svg><span class="hidden">Username</span></label>
          <input id="register__username" type="text" name="username" class="form__input" placeholder="Username" required onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div class="form__field">
          <label for="register__password"><svg class="icon"><i class='bx bxs-user'></i></svg><span class="hidden">Password</span></label>
          <input id="register__password" type="password" name="password" class="form__input" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div class="form__field">
          <input type="submit" value="Sign Up" />
        </div>
      </form>
      <p class="text--center">Already have an account? <Link to="/login">Login now</Link></p>
    </div>
  )
}

export default Register;