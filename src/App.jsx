import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppBar, Toolbar } from '@mui/material'

function App() {

  return (
    <>
      <AppBar sx={{position:'static'}}>
        <Toolbar>app</Toolbar>
      </AppBar>
    </>
  )
}

export default App
