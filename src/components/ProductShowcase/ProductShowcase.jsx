// React
import React from "react";

// Utils
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Box,
} from "@mui/material";

// Icons
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductShowcase = ({ product, onAddToCart }) => {
  return (
    <>
      <Card sx={{ minWidth: 300, position: "relative", margin: "0 auto" }}>
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            height="240px"
            image={product.image}
            alt={product.title}
          ></CardMedia>
          <CardContent>
            <Typography variant="h6">{product.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {" "}
              {product.price} pontos
            </Typography>
          </CardContent>
          <IconButton
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              backgroundColor: "rgba(255,255,255,0.8)",
              "&:hover": { backgroundColor: "rgba(255,255,255,1)" },
            }}
            color="primary"
            onClick={() => onAddToCart(product)}
          >
            <AddShoppingCartIcon></AddShoppingCartIcon>
          </IconButton>
        </Box>
      </Card>
    </>
  );
};

export default ProductShowcase;
