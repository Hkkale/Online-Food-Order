import Navbar from "./components/Navbar/Navbar"
import './App.css'
import { ThemeProvider } from "@emotion/react"
import { darkTheme } from "./components/Theme/DarkTheme"
import { CssBaseline } from "@mui/material"
import Home from "./components/Home/Home"
import RestaurantDetails from "./components/Restaurant/RestaurantDetails"
import Cart from "./components/Cart/Cart"
import Profile from "./components/Profile/Profile"
import CustomerRouter from "./Routers/CustomerRouter"
import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import {getUser} from "../src/State/Authentication/Action"


function App() {

  const dispatch=useDispatch();

  const jwt=localStorage.getItem("jwt");

  const {auth} = useSelector(store=>store)


  useEffect(()=>{

    dispatch(getUser(auth.jwt || jwt));

  },[auth.jwt])
 

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>

    

     <CustomerRouter/>


  
    </ThemeProvider>
  )
     
  
}

export default App
