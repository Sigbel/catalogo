import React, { useEffect, useState } from "react";
import {
  Typography,
  TextField,
  Box,
  Button,
  Stack,
  FormControl,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

const CadastroForm = ({ setAuthenticated }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCPF] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (name && cpf && password) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = { name, email, cpf, password };
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Cadastro realizado com sucesso!");
      setAuthenticated(true);
      navigate("/home");
    } else {
      alert("Preencha os campos!");
    }
  };

  useEffect(() => {
    console.log(cpf);
  }, [setCPF]);

  return (
    <>
      <Stack direction="row-reverse" spacing={1}>
        <Box
          //   bgcolor="#5271ff"
          display="flex"
          flexDirection="column"
          height="100vh"
          flex={4}
          alignItems="center"
          justifyContent="center"
        >
          <img
            src="https://res.cloudinary.com/dvqvv2bkq/image/upload/v1733447154/images/photo/hlb4dsp4gfbbbiorq8df.png"
            alt="Laurear"
            width="100px"
          ></img>
          <Box display="flex" flexDirection="column" gap={0.5} marginBottom={2}>
            <Typography align="center">Cadastre-se!</Typography>
          </Box>
          <Box
            component="form"
            bgcolor="#ffffff"
            display="flex"
            flexDirection="column"
            maxWidth="360px"
            gap={2}
          >
            <FormControl>
              <TextField
                type="name"
                placeholder="Nome"
                variant="outlined"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></TextField>
            </FormControl>
            <FormControl>
              <TextField
                type="email"
                placeholder="Email"
                variant="outlined"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></TextField>
            </FormControl>
            <FormControl>
              <TextField
                type="cpf"
                placeholder="CPF"
                variant="outlined"
                required
                value={cpf}
                onChange={(e) => setCPF(e.target.value)}
              ></TextField>
            </FormControl>
            <TextField
              type="password"
              placeholder="Senha"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
            <Button
              type="submit"
              onClick={() => handleSignUp()}
              variant="contained"
            >
              Cadastrar
            </Button>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
            maxWidth="360px"
            alignItems="center"
            marginTop={2}
          >
            <Link to="/login">
              <Typography fontSize="13px">Esqueci minha senha</Typography>
            </Link>
            <Link>
              <Link to="/login">
                <Typography fontSize="13px">
                  Já tem conta? Faça o login!
                </Typography>
              </Link>
            </Link>
          </Box>
        </Box>
        <Box
          bgcolor="#5271ff"
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          flex={6}
        >
          <img
            src="https://res.cloudinary.com/dvqvv2bkq/image/upload/v1733628276/images/photo/siq0tscmcfigsng8pzwe.png"
            width="80%"
            alt=""
          />
        </Box>
      </Stack>
    </>
  );
};

export default CadastroForm;
