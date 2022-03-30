import { Fragment } from "react";

const Login = ({setAuth, setToken}) => {
  return(
    <div>
      <p>Login</p>
      <button onClick={() => setAuth(true)}>Authenticate</button>
    </div>
  )
}

export default Login;