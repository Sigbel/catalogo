// React
import React from "react";

// Components
import LoginForm from "../components/LoginForm/LoginForm";

const Login = ({ setAuthenticated }) => {
  return (
    <>
      <LoginForm setAuthenticated={setAuthenticated}></LoginForm>
    </>
  );
};

export default Login;
