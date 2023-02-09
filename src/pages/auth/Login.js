import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import "./login.css"
import { loginSuccess } from "../../userSlice"
import jwtDecode from "jwt-decode"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault()

    // const res = await fetch("http://127.0.0.1:8000/api/account/login/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: email,
    //     password: password
    //   })
    // })
    
    // if (res.ok) {
    //   const data = await res.json()
    //   dispatch(loginSuccess({
    //     id: data.id,
    //     email: data.email,
    //     username: data.username,
    //     token: data.jwt_token
    //   }));
    //   navigate("/", {replace: true})
    // }
  
    const res = await fetch("http://127.0.0.1:8000/api/account/token/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      })
    })

    let data = await res.json()
    console.log(data)
    if (res.ok) {
      const userData = jwtDecode(data.access)
      dispatch(loginSuccess({
        accessToken: data.access,
        refreshToken: data.refresh,
        id: userData.user_id,
        email: userData.email,
        username: userData.username,
      }))
      navigate("/", {replace: true})
    } else {
      alert("Something went wrong")
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
      <p class="text--center">Not a member? <Link to="/register">Sign up now</Link> </p>

       <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
    </div>
  )
}

export default Login;