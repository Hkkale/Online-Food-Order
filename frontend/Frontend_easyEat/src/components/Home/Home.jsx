import React from 'react'
import "./Home.css"
import MultiItemCarousel from './MultiItemCarousel'
import RestaurantCard from '../restaurant/RestaurantCard';


const restaurant=[1,2,3,4,5,6];

const Home = () => {
  return (
    <div className="">
      <section className='banner -z-50 relative flex flex-col justify-center items-center'>

        <div className='w-[50vw] z-10 text-center'>
        <p  className='text-2xl lg:text-6xl font-bold z-10 py-5'>Easy Eat</p>
        <p className='z-10 text-grey-300 text-xl lg:text-4xl'>Taste the Convenience: Food, Fast and Delivered.</p>

        </div>

        <div className='cover absolute top-0 left-0 right-0'>

          

        </div>
        <div className='fadout'>

        </div>

      </section>

      <section className='p-10 lg:py-10 lg:px-10 '>
        <p className='text-2xl font-semibold text-grey-400 py-3 pb-10'>Top Meals</p>
        <MultiItemCarousel/>
      </section>

      <section className='px-5 lg:px-20'>
        <h1 className=' text-2xl font-semibold text-gray-400 py-3'>Order From Our Handpicked Favorites</h1>
        <div>
          {
            restaurant.map((item)=><RestaurantCard key={item}/>)
            
          }

        </div>
      </section>
      
    </div>
  )
}

export default Home
