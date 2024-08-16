import Navbar from "./components/Navbar/Navbar"
import './App.css'
import { ThemeProvider } from "@emotion/react"
import { darkTheme } from "./components/Theme/DarkTheme"
import { CssBaseline } from "@mui/material"
import Home from "./components/Home/Home"

function App() {
 

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>

    <Navbar></Navbar>

    <Home></Home>
    </ThemeProvider>
  )
     
  
}

export default App
