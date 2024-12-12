import React from "react";
import OrdersList from "../components/OrdersList/OrdersList";
import { Container, Box, Typography, Grid2, Paper } from "@mui/material";

const Orders = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const users = JSON.parse(localStorage.getItem("users"));
  const userExists = users.find((u) => u.id === user.id);

  return (
    <Container maxWidth="lg">
      <Grid2 container spacing={2} sx={{ mt: 2}}>
        <Grid2 item xs={12}>
          <Paper elevation={3}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h4">Pedidos</Typography>
              {userExists && userExists.orders ? (
                <OrdersList orders={userExists.orders}></OrdersList>
              ) : (
                <Typography>Nenhum pedido encontrado.</Typography>
              )}
            </Box>
          </Paper>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Orders;
