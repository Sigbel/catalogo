// React
import React from "react";

// Utils
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
import { Link } from "react-router-dom";

// Hooks
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
      <Stack
        direction={{ xs: "column-reverse", md: "row-reverse" }}
        spacing={1}
        sx={{ minHeight: "100vh" }}
      >
        <Box
          display="flex"
          flexDirection="column"
          flex={4}
          alignItems="center"
          justifyContent="center"
          sx={{
            padding: { xs: 2, md: 4 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <img
            src="https://res.cloudinary.com/dvqvv2bkq/image/upload/v1733447154/images/photo/hlb4dsp4gfbbbiorq8df.png"
            alt="Laurear"
            width="80px"
          ></img>
          <Box
            display="flex"
            flexDirection="column"
            gap={1}
            marginBottom={3}
            maxWidth={{ xs: "100%", md: "360px" }}
          >
            <Typography variant="h6" align="center">Que bom ter você por aqui!</Typography>
            <Typography variant="body2" align="center">
              Entre na plataforma e troque pontos por vouchers.
            </Typography>
          </Box>
          <Box
            component="form"
            bgcolor="#ffffff"
            display="flex"
            flexDirection="column"
            maxWidth={{xs: "100%", md: "360px"}}
            gap={2}
            width="100%"
            borderRadius={1}
            padding={2}
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
            flexDirection={{xs: "column", md: "row"}}
            gap={1}
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
          sx={{padding:2, minHeight: {xs: "300px", md:"100vh"}}}
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

export default LoginForm;
