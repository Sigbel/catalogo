import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ProductCart = ({cartItems, open, onClose }) => {
  return (
      <Drawer anchor="right" open={open} onClose={onClose}>
        <div style={{ width: 300, padding: 16 }}>
          <IconButton onClick={onClose}>
            <CloseIcon></CloseIcon>
          </IconButton>
          <List>
            {cartItems.map((item) => (
              <ListItem key={item.id}>
                <ListItemText
                  primary={item.title}
                  secondary={`R$ ${item.price.toFixed(2)}`}
                ></ListItemText>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
  );
};

export default ProductCart;
