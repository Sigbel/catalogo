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
import ProductCart from "../ProductCart/ProductCart";

import { useNavigate } from "react-router-dom";

const NavBar = ({cart, setCart, onSearch, setAuthenticated }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")) || "Usuário";
  const [isCartOpen, setCartOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setAuthenticated(false);
    navigate("/login");
  };

  const handleUpdateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <>
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

        <Box sx={{ display: "flex", alignItems:'center', gap: 2 }}>
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
