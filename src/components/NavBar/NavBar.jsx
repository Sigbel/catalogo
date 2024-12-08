import React, {useState} from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
  TextField,
  Box,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";

import { useNavigate } from "react-router-dom";

const NavBar = ({ cartItemCount, onSearch }) => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user") || "Usuário";
  const [isCartOpen, setCartOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setAuthenticated(false);
    navigate("/login");
  };

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton color="inherit" onClick={() => navigate("/home")}>
          <HomeIcon></HomeIcon>
        </IconButton>

        <TextField
          placeholder="Buscar produtos..."
          variant="outlined"
          size="small"
          sx={{
            backgroundColor: "white",
            borderRadius: 1,
            width: "40%",
          }}
          onChange={(e) => onSearch(e.target.value)}
        ></TextField>

        <Box sx={{ display: "flex" }}>
          <Typography variant="body1">Olá, {user.name}</Typography>

          <IconButton color="inherit" onClick={() => setCartOpen(true)}>
            <Badge badgeContent={cartItemCount} color="error">
              <ShoppingCartIcon></ShoppingCartIcon>
            </Badge>
          </IconButton>

          <IconButton color="inherit" onClick={handleLogout}>
            <LogoutIcon></LogoutIcon>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
