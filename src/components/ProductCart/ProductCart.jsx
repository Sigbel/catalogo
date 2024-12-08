// React
import React from "react";

// Utils
import {
  Drawer,
  List,
  ListItem,
  IconButton,
  Typography,
  Box,
} from "@mui/material";

// Icons
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const ProductCart = ({
  cartItems,
  open,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
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
        {cartItems.length === 0 && (
          <Typography variant="body2">Seu carrinho está vazio.</Typography>
        )}
      </Box>
    </Drawer>
  );
};

export default ProductCart;
