import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Home = ({ setAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setAuthenticated(false);
    navigate("/login");
  };

  return (
    <>
      <nav>
        <Button
          type="submit"
          onClick={() => handleLogout()}
          variant="contained"
        >Deslogar</Button>
      </nav>
      <h1>Bem-vindo à Home Page</h1>
      <p>Você está logado!</p>
    </>
  );
};

export default Home;
