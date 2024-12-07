import './App.css'
import {Route, Routes} from 'react-router-dom'

// Hooks
import { useEffect, useState } from 'react'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import ShowCase from './pages/Showcase'

// Components
import LoginForm from './components/LoginForm/LoginForm'
import CadastroForm from './components/CadastroForm/CadastroForm'

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('user')
    if (userLoggedIn) {
      setAuthenticated(true)
    }
  }, [])

  return (
    <>
      <Routes>
        <Route>
        <Route path="/home" element={authenticated ? <Home setAuthenticated={setAuthenticated}/> : <LoginForm />} />
        <Route path="/login" element={<LoginForm setAuthenticated={setAuthenticated}></LoginForm>}/>
        <Route path="/signup" element={<CadastroForm setAuthenticated={setAuthenticated}></CadastroForm>}/>
        <Route path='/showcase' element={<ShowCase setAuthenticated={setAuthenticated}></ShowCase>}/>
        <Route path="/" element={<Login setAuthenticated={setAuthenticated}></Login>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
