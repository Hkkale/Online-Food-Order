import React from 'react'
import {Box, Modal} from "@mui/material"
import{useLocation,useNavigate} from 'react-router-dom'
import { style } from '../Cart/Cart';

const Auth = () => {


  const loaction = useLocation();

  const navigate=useNavigate();

  


  return (
    <>

    <Modal open ={
      location.pathname==="/account/register"
      || location.pathname==="/account/login"
      
    }>

      <Box sx={style}>

        Modal

      </Box>

    </Modal>
      
    </>
  )
}

export default Auth
