// React
import React from "react";

// Utils
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

// Hooks
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

// Icons
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Products = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { handleAddToCart } = useCart();
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
          <Grid2
            container
            spacing={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {filteredProducts.map((product) => (
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
                  justifyContent: "space-between",
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
