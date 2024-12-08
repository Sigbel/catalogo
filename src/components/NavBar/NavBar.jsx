import React, { useState } from "react";
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
import ProductCart from "../ProductCart/ProductCart";
import SearchIcon from "@mui/icons-material/Search";

import { useNavigate } from "react-router-dom";

import { useCart } from "../../contexts/CartContext";

const NavBar = ({setAuthenticated}) => {
  const navigate = useNavigate();
  const {
    cart,
    handleRemoveItem,
    handleUpdateQuantity,
    handleSearch,
    setSearchTerm,
  } = useCart();
  const user = JSON.parse(localStorage.getItem("user")) || "Usuário";
  const [isCartOpen, setCartOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setAuthenticated(false);
    navigate("/login");
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton color="inherit" onClick={() => navigate("/home")}>
            <HomeIcon></HomeIcon>
          </IconButton>

          <Box sx={{ display: "flex", width: "50%" }}>
            <TextField
              placeholder="Buscar produtos..."
              variant="outlined"
              size="small"
              sx={{
                backgroundColor: "white",
                borderRadius: 1,
                width: "100%",
              }}
              onChange={(e) => setSearchTerm(e.target.value)}
            ></TextField>
            <IconButton
              color="secondary"
              onClick={handleSearch}
              aria-label="buscar"
              sx={{
                backgroundColor: "white",
                borderRadius: 1,
              }}
            >
              <SearchIcon></SearchIcon>
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="body1">{user.points} pontos</Typography>

            <Typography variant="body1">Olá, {user.name}</Typography>

            <IconButton color="inherit" onClick={() => setCartOpen(true)}>
              <Badge badgeContent={cart.length} color="error">
                <ShoppingCartIcon></ShoppingCartIcon>
              </Badge>
            </IconButton>

            <IconButton color="inherit" onClick={handleLogout}>
              <LogoutIcon></LogoutIcon>
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>
      <ProductCart
        onClose={() => setCartOpen(false)}
        open={isCartOpen}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      ></ProductCart>
    </>
  );
};

export default NavBar;
