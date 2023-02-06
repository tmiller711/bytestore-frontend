import React, { useState } from "react"
import "./register.css"

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="register-page">
      <form onSubmit={onSubmit} method="#" class="form login">
        <div class="form__field">
          <label for="register__email"><svg class="icon"></svg><span class="hidden">Email</span></label>
          <input id="register__email" type="text" name="username" class="form__input" placeholder="Email" required onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div class="form__field">
          <label for="register__password"><svg class="icon"><i class='bx bxs-user'></i></svg><span class="hidden">Password</span></label>
          <input id="register__password" type="password" name="password" class="form__input" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div class="form__field">
          <input type="submit" value="Sign Up" />
        </div>
      </form>
      <p class="text--center">Already have an account? <a href="/login">Login now</a></p>
    </div>
  )
}

export default Register;