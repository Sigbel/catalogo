import React, { useState } from "react";
import {
  Typography,
  TextField,
  Box,
  Button,
  Stack,
  FormControl,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

const LoginForm = ({ setAuthenticated }) => {
  const [cpf, setCPF] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (user) => user.cpf === cpf && user.password === password
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      setAuthenticated(true);
      navigate("/home");
    } else {
      alert("CPF ou senha incorretos!");
    }
  };

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
            <Typography align="center">Que bom ter você por aqui!</Typography>
            <Typography align="center">
              Entre na plataforma e troque pontos por vouchers.
            </Typography>
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
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary"></Checkbox>}
              label="Lembre de mim"
            ></FormControlLabel>
            <Button
              type="submit"
              onClick={() => handleSignIn()}
              variant="contained"
            >
              Entrar
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
            <Link to="/">
              <Typography fontSize="13px">Esqueci minha senha</Typography>
            </Link>
            <Link>
              <Link to="/signup">
                <Typography fontSize="13px">
                  Ainda não tem cadastro?
                  <br />
                  Faça seu Primeiro Acesso!
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
            src="https://res.cloudinary.com/dvqvv2bkq/image/upload/v1733522620/images/photo/vsksil2k8zy52sargvk6.jpg"
            width="1000px"
            alt=""
          />
        </Box>
      </Stack>
    </>
  );
};

export default LoginForm;
