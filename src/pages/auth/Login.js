import React from "react"
import "./login.css"

const Login = () => {

  return (
    <div className="login-page">
      <form action="#" method="#" class="form login">
        <div class="form__field">
          <label for="login__email"><svg class="icon"></svg><span class="hidden">Email</span></label>
          <input id="login__gmail" type="text" name="username" class="form__input" placeholder="Email" required />
        </div>
        <div class="form__field">
          <label for="login__password"><svg class="icon"><i class='bx bxs-user'></i></svg><span class="hidden">Password</span></label>
          <input id="login__password" type="password" name="password" class="form__input" placeholder="Password" required />
        </div>
        <div class="form__field">
          <input type="submit" value="Sign In" />
        </div>
      </form>
      <p class="text--center">Not a member? <a href="/register">Sign up now</a> <svg class="icon"></svg></p>

       <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
    </div>
  )
}

export default Login;