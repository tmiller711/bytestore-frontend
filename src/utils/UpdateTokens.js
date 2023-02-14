import { useDispatch, useSelector } from "react-redux"
import {logout, updateTokens} from '../slices/userSlice';

const UpdateTokens = async () => {
  const refreshToken = useSelector((state) => state.auth.refreshToken)
  const dispatch = useDispatch();

  const res = await fetch("http://127.0.0.1:8000/api/account/token/refresh/", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'refresh': refreshToken
    })
  })
  let data = await res.json()

  if (res.status === 200) {
    dispatch(updateTokens({
      accessToken: data.access,
      refreshToken: data.refresh,
    }))
  } else {
    dispatch(logout())
  }
}

export default UpdateTokens;