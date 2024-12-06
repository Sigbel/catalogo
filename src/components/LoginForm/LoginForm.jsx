import React from "react";
import {
  Typography,
  TextField,
  Box,
  Button,
  Stack,
  FormControl,
  FormControlLabel,
  Checkbox,
  Link,
} from "@mui/material";

const LoginForm = () => {
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
              ></TextField>
            </FormControl>
            <TextField
              type="password"
              placeholder="Senha"
              variant="outlined"
            ></TextField>
            <FormControlLabel
              control={
                <Checkbox value="remember" color="primary" required></Checkbox>
              }
              label="Lembre de mim"
            ></FormControlLabel>
            <Button
              type="submit"
              onClick={() => alert("Entrar")}
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
            <Link>
              <Typography fontSize="13px">Esqueci minha senha</Typography>
            </Link>
            <Link>
              <Typography fontSize="13px">
                Ainda não tem cadastro?
                <br />
                Faça seu Primeiro Acesso!
              </Typography>
            </Link>
          </Box>
        </Box>
        <Box 
        bgcolor="#5271ff" 
        display='flex'
        justifyContent='center'
        alignItems='center'
        minHeight="100vh" flex={6}>
          <img 
            src="https://res.cloudinary.com/dvqvv2bkq/image/upload/v1733522620/images/photo/vsksil2k8zy52sargvk6.jpg" 
            width='1000px'
            alt="" />
        </Box>
      </Stack>
    </>
  );
};

export default LoginForm;
