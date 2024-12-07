import './App.css'
import LoginForm from './components/LoginForm/LoginForm'
import CadastroForm from './components/CadastroForm/CadastroForm'
import {Route, Routes, Link, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('user')
    if (userLoggedIn) {
      setAuthenticated(true)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user')
    setAuthenticated(false)
    navigate('/login')
  }

  return (
    <>
      <Routes>
        <Route>
        <Route path="/home" element={authenticated ? <Home setAuthenticated={setAuthenticated}/> : <LoginForm />} />
        <Route path="/login" element={<LoginForm setAuthenticated={setAuthenticated}></LoginForm>}/>
        <Route path="/signup" element={<CadastroForm setAuthenticated={setAuthenticated}></CadastroForm>}/>
        <Route path="/" element={<Login setAuthenticated={setAuthenticated}></Login>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
