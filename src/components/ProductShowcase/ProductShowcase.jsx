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
      <Card
        sx={{
          minWidth: 300,
          maxWidth: 300,
          margin: "0 auto",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          borderRadius: "12px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            height="250"
            image={product.image}
            alt={product.title}
          ></CardMedia>
          <CardContent
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 1,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {product.title}
            </Typography>
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
  );
};

export default ProductShowcase;
