// React
import React from "react";

// Utils
import { Grid2 } from "@mui/material";

// Components
import ProductShowcase from "../components/ProductShowcase/ProductShowcase";

// Hooks
import { useCart } from "../contexts/CartContext";

// Database
import products from "../utils/products.json";

const ShowCase = () => {
  const { handleAddToCart } = useCart();

  return (
    <>
      <Grid2 container spacing={3} padding={3}>
        {products.map((product) => (
          <Grid2 item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductShowcase
              product={product}
              onAddToCart={handleAddToCart}
            ></ProductShowcase>
          </Grid2>
        ))}
      </Grid2>
    </>
  );
};

export default ShowCase;
