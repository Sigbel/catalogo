import React, { useState } from "react";

// React
import { Grid2, AppBar, Toolbar, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// Components
import ProductShowcase from "../components/ProductShowcase/ProductShowcase";
import ProductCart from "../components/ProductCart/ProductCart";

// Json
import products from "../utils/products.json";

const ShowCase = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={() => setCartOpen(true)}
          >
            <Badge badgeContent={cart.length} color="error">
              <ShoppingCartIcon></ShoppingCartIcon>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid2 container spacing={3} padding={3}>
        {products.map((product) => (
          <Grid2 item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductShowcase product={product} onAddToCart={handleAddToCart}></ProductShowcase>
          </Grid2>
        ))}
      </Grid2>
      <ProductCart 
        cartItems={cart}
        open={isCartOpen}
        onClose={() => setCartOpen(false)}
      >
      </ProductCart>
    </>
  );
};

export default ShowCase;
