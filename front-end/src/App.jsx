import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import { api } from './utilities'

function App() {
  const [user, setUser] = useState(null)

  const testConnection = async() => {
    const response = await api.get('test/')
    console.log(response)
  }

  useEffect(() => {
    testConnection()
  }, [])


  return (
    <>
      <NavBar/>
      <Outlet context={{user, setUser}} />
    </>
  )
}

export default App
