import React from 'react'
import {Box, Modal} from "@mui/material"
import{useLocation,useNavigate} from 'react-router-dom'
import { style } from '../Cart/Cart';
import LoginForm from "./LoginForm"
import RegisterFoem from "./RegisterForm"

const Auth = () => {


  const loaction = useLocation();

  const navigate=useNavigate();

  const handleOnClose = ()=>{
        navigate("/")
  }

  


  return (
    <>

    <Modal onClose={handleOnClose} open ={
      location.pathname==="/account/register"
      || location.pathname==="/account/login"
      
      
    }>

      <Box sx={style}>

        {location.pathname==="/account/register" ? <RegisterFoem/>:<LoginForm/>}

      </Box>

    </Modal>
      
    </>
  )
}

export default Auth
