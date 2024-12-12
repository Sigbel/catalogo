import React from "react";
import { List, ListItem, ListItemText, Typography, Card, CardContent, Divider } from "@mui/material";
import moment from "moment";

const OrdersList = ({ orders }) => {
  return (
    <List>
      {orders.map((order) => (
        <Card key={order.id} sx={{mb: 2}}>
          <CardContent>
            <Typography variant="h6">Pedido: <strong>{order.id}</strong></Typography>
            <Typography variant="h6">
              Data: {moment(order.data).format('DD/MM/YYYY [às] HH:mm')}
            </Typography>
            <Typography variant="h6">{order.total} Pontos</Typography>
            <Divider sx={{mt: 2, mb: 2}}></Divider>
            <Typography variant="body2">Itens:</Typography>
            <List dense>
              {order.produtos.map((product) => (
                <ListItem key={product.id}>
                  <ListItemText>
                    {product.title} x {product.quantity}
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      ))}
    </List>
  );
};

export default OrdersList;
