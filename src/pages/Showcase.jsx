// React
import React from "react";

// Utils
import { Grid2, Box, Typography } from "@mui/material";

// Components
import ProductShowcase from "../components/ProductShowcase/ProductShowcase";

// Hooks
import { useCart } from "../contexts/CartContext";

// Database
import products from "../utils/products.json";

const ShowCase = () => {
  const { handleAddToCart } = useCart();

  return (
    <Box
      sx={{
        background: "#f7f9fc",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          marginBottom: "2rem",
          fontWeight: "bold",
        }}
      >
        Vitrine de Produtos
      </Typography>
      <Grid2 container spacing={4}
      sx={{display: "flex", justifyContent: "center"}}>
        {products.map((product) => (
          <Grid2
            key={product.id}
          >
            <ProductShowcase
              product={product}
              onAddToCart={handleAddToCart}
            ></ProductShowcase>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default ShowCase;
