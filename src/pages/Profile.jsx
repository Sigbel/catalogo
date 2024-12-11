import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid2,
  MenuItem,
} from "@mui/material";

const estados = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MS",
  "MT",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const [address, setAddress] = useState({
    cep: user.address?.cep || "",
    logradouro: user.address?.logradouro || "",
    numero: user.address?.numero || "",
    complemento: user.address?.complemento || "",
    bairro: user.address?.bairro || "",
    cidade: user.address?.cidade || "",
    estado: user.address?.estado || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveData = () => {
    const updatedUser = { ...user, address };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    alert("Endereço salvo com sucesso!");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 4,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Perfil do Usuário
      </Typography>
      <Card sx={{ maxWidth: 600, width: "100%", marginBottom: 2 }}>
        <CardContent>
          <Typography variant="h6">Informações Pessoais</Typography>
          <Typography variant="body1">Nome: {user.name}</Typography>
          <Typography variant="body1">E-mail: {user.email}</Typography>
          <Typography variant="body1">CPF: {user.cpf}</Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 600, width: "100%" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Endereço
          </Typography>
          <Grid2 container spacing={2}>
            <Grid2 item xs={12} sm={6}>
              <TextField
                fullWidth
                label="CEP"
                name="cep"
                value={address.cep}
                onChange={handleChange}
                variant="outlined"
              ></TextField>
            </Grid2>
            <Grid2 item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Logradouro"
                name="logradouro"
                value={address.logradouro}
                onChange={handleChange}
                variant="outlined"
              ></TextField>
            </Grid2>
            <Grid2 item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Número"
                name="numero"
                value={address.numero}
                onChange={handleChange}
                variant="outlined"
              ></TextField>
            </Grid2>
            <Grid2 item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Complemento"
                name="complemento"
                value={address.complemento}
                onChange={handleChange}
                variant="outlined"
              ></TextField>
            </Grid2>
            <Grid2 item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Bairro"
                name="bairro"
                value={address.bairro}
                onChange={handleChange}
                variant="outlined"
              ></TextField>
            </Grid2>
            <Grid2 item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Cidade"
                name="cidade"
                value={address.cidade}
                onChange={handleChange}
                variant="outlined"
              ></TextField>
            </Grid2>
            <Grid2 item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Estado"
                name="estado"
                value={address.estado}
                onChange={handleChange}
                variant="outlined"
              >
                {estados.map((estado) => (
                  <MenuItem key={estado} value={estado}>
                    {estado}
                  </MenuItem>
                ))}
              </TextField>
            </Grid2>
          </Grid2>
          <Button
            variant="contained"
            color="primary"
            sx={{marginTop: 2}}
            onClick={handleSaveData}
          >Salvar Dados</Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;
