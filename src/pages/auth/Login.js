import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import "./login.css"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch("http://127.0.0.1:8000/api/account/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "XCSRF-Token": 
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    
    if (res.ok) {
     // const data = await res.json()
      navigate("/", {replace: true})
    }
  }

  return (
    <div className="login-page">
      <form onSubmit={onSubmit} method="#" class="form login">
        <div class="form__field">
          <label for="login__email"><svg class="icon"></svg><span class="hidden">Email</span></label>
          <input id="login__gmail" type="text" name="username" class="form__input" placeholder="Email" required onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div class="form__field">
          <label for="login__password"><svg class="icon"><i class='bx bxs-user'></i></svg><span class="hidden">Password</span></label>
          <input id="login__password" type="password" name="password" class="form__input" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div class="form__field">
          <input type="submit" value="Sign In" />
        </div>
      </form>
      <p class="text--center">Not a member? <a href="/register">Sign up now</a> </p>

       <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
    </div>
  )
}

export default Login;