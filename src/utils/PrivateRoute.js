import { useSelector } from 'react-redux'
import { Route, Navigate } from 'react-router-dom'

const PrivateRoute = ({ children, ...rest }) => {
  const authenticated = useSelector((state) => state.auth.authenticated)
  return (
    <Route {...rest}>{!authenticated ? <Navigate to={'/login'} /> : children}</Route>
  )
}

export default PrivateRoute;