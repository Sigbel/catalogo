import React from "react";

// React
import { Grid2 } from "@mui/material";
// Components
import ProductShowcase from "../components/ProductShowcase/ProductShowcase";

// Json
import products from "../utils/products.json";

const ShowCase = ({ setCart}) => {
    const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };



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
