import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Home from "../components/Home/Home"
import RestaurantDetails from '../components/Restaurant/RestaurantDetails'
import Cart from '../components/Cart/Cart'
import Profile from '../components/Profile/Profile'
import { Routes , Route } from 'react-router-dom'
import Auth  from '../components/Auth/Auth'
const CustomerRouter = () => {
  return (
    <div>

      <Navbar/>

      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/account/:register' element={<Home/>} />
        <Route path='/restaurant/:city/:title/:id' element={<RestaurantDetails/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/my-profile/*' element={<Profile/>} />


      </Routes>
      <Auth/>
      
    </div>
  )
}

export default CustomerRouter
