// React
import React, { useEffect } from "react";

// Utils
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
  TextField,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

// Icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import ProductCart from "../ProductCart/ProductCart";
import SearchIcon from "@mui/icons-material/Search";

// Hooks
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { useMediaQuery } from "@mui/material";

const NavBar = ({ setAuthenticated }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    cart,
    handleRemoveItem,
    handleUpdateQuantity,
    handleSearch,
    setSearchTerm,
    searchTerm,
    handleKeyDown,
  } = useCart();
  const user = JSON.parse(localStorage.getItem("user")) || "Usuário";
  const [isCartOpen, setCartOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");

  const handleLogout = () => {
    localStorage.removeItem("user");
    setAuthenticated(false);
    navigate("/login");
  };

  useEffect(() => {
    setSearchTerm("");
  }, [location, setSearchTerm]);

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#5271ff" }}>
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
                marginRight: "8px",
              }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
            ></TextField>
            <IconButton
              color="secondary"
              onClick={handleSearch}
              aria-label="buscar"
              sx={{
                backgroundColor: "white",
                borderRadius: 1,
                padding: "8px",
                color: "#5271ff",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.8)" },
              }}
            >
              <SearchIcon></SearchIcon>
            </IconButton>
          </Box>

          {!isMobile ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <Box
                sx={{
                  backgroundColor: "#ffffff",
                  color: "#5271ff",
                  borderRadius: "10px",
                  padding: "4px 10px",
                  fontWeight: "bold",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {user.points} pontos
              </Box>

              <Typography
                variant="body1"
                sx={{ color: "#fff", fontWeight: "500" }}
              >
                Olá, {user.name}
              </Typography>

              <IconButton color="inherit" onClick={() => setCartOpen(true)}>
                <Badge badgeContent={cart.length} color="error">
                  <ShoppingCartIcon></ShoppingCartIcon>
                </Badge>
              </IconButton>

              <IconButton color="inherit" onClick={handleLogout}>
                <LogoutIcon></LogoutIcon>
              </IconButton>
            </Box>
          ) : (
            <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
              <MenuIcon></MenuIcon>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List sx={{ width: 250 }} role="presentation">
          <ListItem button onClick={() => navigate("/home")}>
            <ListItemText primary="Home"></ListItemText>
          </ListItem>
          <Divider></Divider>
          <ListItem button onClick={() => setCartOpen(true)}>
            <ListItemText primary="Carrinho"></ListItemText>
          </ListItem>
          <Divider></Divider>
          <ListItem button onClick={handleLogout}>
            <ListItemText primary="Logout"></ListItemText>
          </ListItem>
          <Divider></Divider>
        </List>
      </Drawer>

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
