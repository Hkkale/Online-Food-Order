import Navbar from "./components/Navbar/Navbar"
import './App.css'
import { ThemeProvider } from "@emotion/react"
import { darkTheme } from "./components/Theme/DarkTheme"
import { CssBaseline } from "@mui/material"
import Home from "./components/Home/Home"
import RestaurantDetails from "./components/Restaurant/RestaurantDetails"
import Cart from "./components/Cart/Cart"
import Profile from "./components/Profile/Profile"


function App() {
 

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>

    <Navbar></Navbar>

    {/* <Home></Home> */}
    

     {/* <RestaurantDetails></RestaurantDetails> */}
     {/* <Cart/> */}

     <Profile/>
  
    </ThemeProvider>
  )
     
  
}

export default App
