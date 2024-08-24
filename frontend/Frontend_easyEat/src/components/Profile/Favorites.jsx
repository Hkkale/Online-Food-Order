import React from 'react'
import RestaurantCard from "../Restaurant/RestaurantCard"

const Favorites = () => {
  return (
    <div className=''>
      <h1 className='py-5 text-xl font-semibold text-center'>My Favorites</h1>

      <div className='flex flex-wrap justify-center gap-3'>

        {[1,2,3,4,5,6].map((item)=><RestaurantCard key={item}/>)}

      </div>
    </div>
  )
}

export default Favorites
