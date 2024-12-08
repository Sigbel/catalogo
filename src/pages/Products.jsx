import {
  Box,
  Button,
  Grid2,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useCart } from "../contexts/CartContext";

const Products = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {handleAddToCart} = useCart()


  const { filteredProducts } = location.state || [];

  return (
    <>
      <Box sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          {filteredProducts.length
            ? "Resultados da Busca"
            : "Nenhum produto encontrado."}
        </Typography>
        {filteredProducts.length ? (
          <Grid2 container spacing={2}>
            {filteredProducts.map((product) => (
              <Card
                sx={{ minWidth: 300, position: "relative", margin: "0 auto" }}
              >
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
                    onClick={() => handleAddToCart(product)}
                  >
                    <AddShoppingCartIcon></AddShoppingCartIcon>
                  </IconButton>
                </Box>
              </Card>
            ))}
          </Grid2>
        ) : (
          <Button variant="outlined" onClick={() => navigate("/showcase")}>
            Voltar para a Vitrine
          </Button>
        )}
      </Box>
    </>
  );
};

export default Products;
