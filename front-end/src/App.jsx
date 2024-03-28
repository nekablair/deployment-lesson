import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'

function App() {
  const [user, setUser] = useState(null)

  return (
    <>
      <NavBar/>
      <Outlet/>
    </>
  )
}

export default App
