import React, { useState } from 'react'
import { Divider, FormControl, Grid, RadioGroup, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import {FormControlLabel }from '@mui/material';
import {Radio} from '@mui/material';
import MenuCard from './MenuCard';


const categories=["pizza","biryani","burger","chicken","rice"];

const foodTypes=[
  {label:"All",value:"all"},
  {label:"Vegetarian only",value:"vegetarian"},
  {label:"Non-Vegetarian",value:"non_vegeterian"},
  {label:"Seasonal",value:"seasonal"}
];


const menu=[1,2,3,4,5,6];


const RestaurantDetails = () => {

  const [foodType ,setFooType]=useState("all");

  const handleFilter=(e) => {
    console.log(e.target.value, e.target.name);

  }


  return (
    <div className='px-5 lg:px-20 '>
      <section>
        <h3 className='text-gray-500 py-2 mt-10'>Home/india/indian fast food/3</h3>

        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img className='w-full h-[40vh] object-cover' src="https://cdn.pixabay.com/photo/2022/11/14/10/37/chinese-lanterns-7591296_1280.jpg" alt="" />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img className='w-full h-[40vh] object-cover' src="https://cdn.pixabay.com/photo/2020/11/02/12/59/table-5706576_1280.jpg" alt="" />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img className='w-full h-[40vh] object-cover' src="https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_1280.jpg" alt="" />
            </Grid>

          </Grid>
        </div>

        <div className='pt-3 pb-5'>
          <h1 className='text-4xl font-semibold'>Indian Fast Food</h1>
          <p className='text-gray-500 mt-1 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, cumque harum eaque suscipit dolores placeat odio amet sed eum laudantium eius dolore, facere, voluptatem dignissimos maxime cupiditate labore doloribus cum.</p>
          <div className='space-y-3 mt-3'>
          <p className='text-gray-500 flex items-center gap-3'>
            <LocationOnIcon/>

            <span>Mumabai, Maharashtra</span>
          </p>
          <p className='text-gray-500 flex items-center gap-3'>
            <CalendarTodayIcon/>

            <span>Mon-Sun 9:00AM -9:00PM</span>
          </p>
          </div>
          

        </div>
      </section>

      <Divider/>


      <section className='pt-[2rem] lg:flex relative'>

        <div className='space-y-10 lg:w-[20%] filter '>
          
          <div className='box space-y-5 lg:sticky top-28 '>

            <div className=''>

             <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
              Food Type
             </Typography>


             <FormControl className='py-10 space-y-5 ' component={"fieldset"} >
              <RadioGroup onChange={handleFilter} name='food_type' value={foodTypes}>
              
              {foodTypes.map((item)=>(<FormControlLabel 
              key={item.value}
              value={item.value} 
              control={<Radio />} 
              label={item.label}
               />))}

              </RadioGroup>

             </FormControl>

            </div>


          
            <Divider/>


            <div className=''>

             <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
              Food Category
             </Typography>


             <FormControl className='py-10 space-y-5 ' component={"fieldset"} >
              <RadioGroup onChange={handleFilter} name='food_type' value={foodTypes}>
              
              {categories.map((item)=>(<FormControlLabel 
              key={item}
              value={item} 
              control={<Radio />} 
              label={item}
               />))}

              </RadioGroup>

             </FormControl>

            </div>


            

          </div>

        </div>

        <div className='space-y-5 lg:w-[80%] lg:pl-10'>
        {menu.map((item)=>(<MenuCard key={item}/>))}

        </div>

      </section>

     
      
    </div>
  )
}

export default RestaurantDetails;
