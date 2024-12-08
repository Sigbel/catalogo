import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";

// Hooks
import { useEffect, useState } from "react";
import CartProvider from "./contexts/CartContext";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import ShowCase from "./pages/Showcase";
import Products from "./pages/Products";

// Components
import LoginForm from "./components/LoginForm/LoginForm.jsx";
import CadastroForm from "./components/CadastroForm/CadastroForm.jsx";
import NavBar from "./components/Navbar.jsx";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("user");
    if (userLoggedIn) {
      setAuthenticated(true);
    }
  }, []);

  const handleCartState = (state) => {
    setCart(state);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <MainContent
        searchTerm={searchTerm}
        onSearch={handleSearch}
        cart={cart}
        handleCartState={handleCartState}
        setCart={setCart}
        setAuthenticated={setAuthenticated}
        authenticated={authenticated}
      ></MainContent>
    </>
  );
}

const MainContent = ({ cart, setAuthenticated, setCart, authenticated }) => {
  const location = useLocation();

  const showNavbar =
    location.pathname !== "/login" &&
    location.pathname !== "/signup" &&
    location.pathname !== "/";

  return (
    <>
      <CartProvider>
        {showNavbar && <NavBar setAuthenticated={setAuthenticated}></NavBar>}

        <Routes>
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
              ></ShowCase>
            }
          />
          <Route
            path="/products"
            element={<Products setAuthenticated={setAuthenticated}></Products>}
          />
          <Route
            path="/"
            element={<Login setAuthenticated={setAuthenticated}></Login>}
          />
        </Routes>
      </CartProvider>
    </>
  );
};

export default App;
