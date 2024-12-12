// React
import React, { useState } from "react";

// Utils
import {
  Drawer,
  List,
  ListItem,
  IconButton,
  Typography,
  Box,
  Modal,
  Button,
} from "@mui/material";

// Icons
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

// Utils

const ProductCart = ({
  cartItems,
  open,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  clearCart,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [orderid, setOrderId] = useState("");

  const handleClose = () => {
    clearCart();
    setOpenModal(false);
  };

  const handleOrder = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const totalOrder = cartItems.reduce(
      (soma, item) => soma + item.price * item.quantity,
      0
    );

    if (user.points >= totalOrder) {
      user.points -= totalOrder;
      localStorage.setItem("user", JSON.stringify(user));

      const order = {
        id: Date.now(),
        produtos: cartItems,
        total: totalOrder,
        data: new Date(),
      };

      const users = JSON.parse(localStorage.getItem("users")) || [];

      const userExists = users.find((u) => u.id === user.id);

      if (userExists) {
        if (!userExists.orders) {
          userExists.orders = [];
        }
        userExists.orders.push(order);
      } else {
        users.push({ ...user, orders: [order] });
      }

      // const updatedUsersOrder = users.map((u) => u.id === user.id ? {...u, orders: [order]} : u)
      localStorage.setItem("users", JSON.stringify(users));

      // const updatedUserOrder = { ...user, orders: [order] };
      // localStorage.setItem("user", JSON.stringify(users));
      setOrderId(order.id);

      setOpenModal(true);
    } else {
      alert("Saldo Insuficiente!");
    }
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      alignItems="space-between"
    >
      <Box sx={{ width: 300, padding: 2 }}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6" gutterBottom>
            Carrinho
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon></CloseIcon>
          </IconButton>
        </Box>
        <List>
          {cartItems.map((item) => (
            <ListItem key={item.id} divider>
              <Box>
                <Typography variant="body1">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.price} x {item.quantity} = {item.price * item.quantity}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton onClick={() => onUpdateQuantity(item.id, -1)}>
                  <RemoveIcon></RemoveIcon>
                </IconButton>
                <Typography variant="body1" sx={{ margin: "0 8px" }}>
                  {item.quantity}
                </Typography>
                <IconButton onClick={() => onUpdateQuantity(item.id, 1)}>
                  <AddIcon></AddIcon>
                </IconButton>
                <IconButton color="error" onClick={() => onRemoveItem(item.id)}>
                  <DeleteIcon></DeleteIcon>
                </IconButton>
              </Box>
            </ListItem>
          ))}
        </List>
        {cartItems.length > 0 && (
          <Button
            sx={{
              p: 3,
              width: "100%",
              backgroundColor: "#5271ff",
              color: "white",
            }}
            onClick={handleOrder}
          >
            Fechar Pedido
          </Button>
        )}
        {cartItems.length === 0 && (
          <Typography variant="body2">Seu carrinho está vazio.</Typography>
        )}
      </Box>
      <Box>
        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50% , -50%)",
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Pedido Nº <strong>{orderid}</strong> gerado com sucesso!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Total:{" "}
              {cartItems.reduce(
                (soma, item) => soma + item.price * item.quantity,
                0
              )}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Produtos:
            </Typography>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.title} x {item.quantity}
                </li>
              ))}
            </ul>
          </Box>
        </Modal>
      </Box>
    </Drawer>
  );
};

export default ProductCart;
