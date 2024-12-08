import "./App.css";
import { Route, Routes } from "react-router-dom";

// Hooks
import { useEffect, useState } from "react";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import ShowCase from "./pages/Showcase";
import { AppBar, Toolbar, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// Components
import LoginForm from "./components/LoginForm/LoginForm";
import CadastroForm from "./components/CadastroForm/CadastroForm";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("user");
    if (userLoggedIn) {
      setAuthenticated(true);
    }
  }, []);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton color="inherit" onClick={() => setCartOpen(true)}>
            <Badge badgeContent={cart.length} color="error">
              <ShoppingCartIcon></ShoppingCartIcon>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route>
          <Route
            path="/home"
            element={
              authenticated ? (
                <Home setAuthenticated={setAuthenticated} />
              ) : (
                <LoginForm />
              )
            }
          />
          <Route
            path="/login"
            element={
              <LoginForm setAuthenticated={setAuthenticated}></LoginForm>
            }
          />
          <Route
            path="/signup"
            element={
              <CadastroForm setAuthenticated={setAuthenticated}></CadastroForm>
            }
          />
          <Route
            path="/showcase"
            element={
              <ShowCase
                setAuthenticated={setAuthenticated}
                cart={cart}
                setCart={setCart}
                isCartOpen={isCartOpen}
                setCartOpen={setCartOpen}
              ></ShowCase>
            }
          />
          <Route
            path="/"
            element={<Login setAuthenticated={setAuthenticated}></Login>}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
