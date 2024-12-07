import React from 'react'
import LoginForm from '../components/LoginForm/LoginForm'

const Login = ({setAuthenticated}) => {
  return (
    <>
      <LoginForm setAuthenticated={setAuthenticated}></LoginForm>
    </>
  )
}

export default Login