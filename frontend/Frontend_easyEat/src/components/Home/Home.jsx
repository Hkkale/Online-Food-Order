import React, { useEffect } from "react";
import "./Home.css";
import MultiItemCarousel from "./MultiItemCarousel";
import RestaurantCard from "../restaurant/RestaurantCard";
import Auth from "../Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { getAllRestaurantsAction } from "../../State/Restaurant/Action";
import { useNavigate } from "react-router-dom";
import { findCart } from "../../State/Cart/Action";

const res = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const Home = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { restaurant } = useSelector((store) => store);
  console.log("restaurant", restaurant);
  const navigate= useNavigate();

  useEffect(() => {
    dispatch(getAllRestaurantsAction(jwt));
    
  }, []);


  

  return (
    <div className="pb-10">
      <section className="banner -z-50 relative flex flex-col justify-center items-center">
        <div className="w-[50vw] z-10 text-center">
          <p className="text-2xl lg:text-6xl font-bold z-10 py-5">Easy Eat</p>
          <p className="z-10 text-grey-300 text-xl lg:text-4xl">
            Taste the Convenience: Food, Fast and Delivered.
          </p>
        </div>

        <div className="cover absolute top-0 left-0 right-0"></div>
        <div className="fadout"></div>
      </section>

      <section className="p-10 lg:py-10 lg:px-10 ">
        <p className="text-2xl font-semibold text-grey-400 py-3 pb-10">
          Top Meals
        </p>
        <MultiItemCarousel />
      </section>

      <section className="px-5 lg:px-20 pt-10">
        <h1 className=" text-2xl font-semibold text-gray-400 pb-5">
          Order From Our Handpicked Favorites
        </h1>
        <div className="flex flex-wrap items-center justify-around gap-5">
          {restaurant.restaurants.map((item, id) => (
            <RestaurantCard item={item} key={id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
