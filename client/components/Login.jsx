import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <form action="" method="post">
        Username: <input name="Username"></input><br></br>
        Password: <input name="Password"></input>
      </form>
      <div>
        <h3>Don't have an account?</h3>
        <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}

export default Login
