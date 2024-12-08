import "./App.css";
import { Route, Routes } from "react-router-dom";

// Hooks
import { useEffect, useState } from "react";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import ShowCase from "./pages/Showcase";

// Components
import LoginForm from "./components/LoginForm/LoginForm";
import CadastroForm from "./components/CadastroForm/CadastroForm";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("user");
    if (userLoggedIn) {
      setAuthenticated(true);
    }
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  return (
    <>
      <NavBar cartItemCount={cart.length} onSearch={handleSearch}></NavBar>
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
            path="/"
            element={<Login setAuthenticated={setAuthenticated}></Login>}
          />
        </Routes>
    </>
  );
}

export default App;
